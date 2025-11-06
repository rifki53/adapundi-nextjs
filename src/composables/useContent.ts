import { ref, Ref } from "vue";

// --- Definisi Tipe Data (Interfaces) ---

/**
 * Mendefinisikan struktur blok konten dari Strapi.
 * Hanya properti yang digunakan yang didefinisikan di sini.
 */
interface StrapiBlock {
  __component: string;
  body?: string; // Opsional, karena tidak semua blok memiliki 'body'
}

/**
 * Mendefinisikan struktur objek post untuk tampilan daftar (list).
 */
export interface PostListItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string | null;
  author: string;
  category: string;
  readingTime: number;
}

/**
 * Mendefinisikan struktur objek post untuk tampilan detail.
 * Mewarisi dari PostListItem dan menambahkan properti spesifik detail.
 */
export interface PostDetail extends PostListItem {
  body: string;
  blocks: StrapiBlock[];
  tags: any[]; // Bisa diperketat jika struktur tag diketahui, misal: string[]
}

// --- Konfigurasi ---

const STRAPI_API_URL = "https://cms.adapundi.com";
const DEBUG = true; // Set ke false untuk produksi

// --- Composable Function ---

function logDebug(...args: any[]) {
  if (DEBUG) console.debug('[useContent]', ...args);
}

export function useContent() {
  // --- State dengan Tipe Data ---
  const posts: Ref<PostListItem[]> = ref([]);
  const categories: Ref<string[]> = ref([]);
  const post: Ref<PostDetail | null> = ref(null);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  // --- Helper Functions dengan Tipe Data ---

  /**
   * Menghitung estimasi waktu baca berdasarkan konten teks.
   * @param blocks Array blok konten dari Strapi.
   * @returns Waktu baca dalam menit (bilangan bulat).
   */
  const calculateReadingTime = (blocks: StrapiBlock[] | undefined | null): number => {
    if (!blocks || !blocks.length) return 1;
    
    const richTextBlock = blocks.find(
      (block) => block.__component === "shared.rich-text"
    );
    
    if (!richTextBlock || !richTextBlock.body) return 1;
    
    const words = richTextBlock.body.split(/\s+/).length;
    const wordsPerMinute = 225;
    return Math.ceil(words / wordsPerMinute);
  };

  /**
   * Memformat string tanggal ke format yang lebih mudah dibaca.
   * @param dateString String tanggal ISO.
   * @param format 'short' atau 'long'.
   * @returns Tanggal yang sudah diformat.
   */
  const formatDate = (dateString: string, format: 'short' | 'long' = "short"): string => {
    const options: Intl.DateTimeFormatOptions =
      format === "long"
        ? { year: "numeric", month: "long", day: "numeric" }
        : { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // --- Fetching Functions dengan Tipe Data ---

  /**
   * Mengambil daftar post dari Strapi, dengan opsi filter berdasarkan kategori.
   * @param categoryName Nama kategori untuk filter (opsional).
   */
  const fetchPosts = async (categoryName: string | null = null): Promise<void> => {
    loading.value = true;
    error.value = null;
    
    let url = `${STRAPI_API_URL}/api/articles?populate=*&sort[0]=publishedAt:desc`;
    if (categoryName && categoryName !== 'All') {
      url += `&filters[category][name][$eq]=${categoryName}`;
    }

    try {
      logDebug('fetchPosts url:', url);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Gagal mengambil daftar post dari Strapi");

      const jsonResponse = await response.json();
      logDebug('fetchPosts response count:', jsonResponse.data?.length ?? 0);

      // Menggunakan 'any' untuk item mentah, tapi menghasilkan objek dengan tipe PostListItem
      posts.value = jsonResponse.data.map((item: any): PostListItem => ({
        slug: item.attributes.slug,
        title: item.attributes.title,
        description: item.attributes.description,
        date: item.attributes.publishedAt,
        image: item.attributes.cover?.data?.attributes.formats?.small?.url
          ? `${STRAPI_API_URL}${item.attributes.cover.data.attributes.formats.small.url}`
          : (item.attributes.cover?.data?.attributes.url ? `${STRAPI_API_URL}${item.attributes.cover.data.attributes.url}` : null),
        author: item.attributes.author?.data?.attributes.name || "Unknown Author",
        category: item.attributes.category?.data?.attributes.name || "Uncategorized",
        readingTime: calculateReadingTime(item.attributes.blocks),
      }));

    } catch (e: any) {
      error.value = e.message;
      console.error("Error saat memproses post:", e);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Mengambil semua kategori yang tersedia.
   */
  const fetchCategories = async (): Promise<void> => {
    try {
      const response = await fetch(`${STRAPI_API_URL}/api/categories`);
      if (!response.ok) throw new Error("Gagal mengambil kategori");
      const jsonResponse = await response.json();
      const categoryNames = jsonResponse.data.map((item: any) => item.attributes.name);
      categories.value = ["All", ...categoryNames];
    } catch (e: any) {
      console.error("Error saat mengambil kategori:", e);
      categories.value = ["All"]; // Fallback
    }
  };

  /**
   * Mengambil detail satu post berdasarkan slug-nya.
   * @param slug Slug unik dari post.
   */
  const fetchPostBySlug = async (slug: string): Promise<void> => {
    loading.value = true;
    error.value = null;
    post.value = null;
    
    const url = `${STRAPI_API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;

    try {
        logDebug('fetchPostBySlug url:', url);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Gagal mengambil data post.");
        
        const jsonResponse = await response.json();
        if (!jsonResponse.data || jsonResponse.data.length === 0) {
            throw new Error("Post tidak ditemukan.");
        }

        const item = jsonResponse.data[0].attributes;
        const richTextBlock = item.blocks?.find(
          (block: StrapiBlock) => block.__component === "shared.rich-text"
        );

        post.value = {
            slug: item.slug,
            title: item.title,
            description: item.description,
            date: item.publishedAt,
            body: richTextBlock ? richTextBlock.body || "" : "",
            blocks: item.blocks,
            image: item.cover?.data ? `${STRAPI_API_URL}${item.cover.data.attributes.url}` : null,
            author: item.author?.data?.attributes.name || "Unknown Author",
            category: item.category?.data?.attributes.name || "Uncategorized",
            readingTime: calculateReadingTime(item.blocks),
            tags: item.tags || [],
        };

        logDebug('Post loaded:', {
          slug: post.value.slug,
          hasBody: !!post.value.body,
          bodyLength: post.value.body?.length ?? 0,
        });

    } catch (e: any) {
        error.value = e.message;
        console.error(e);
    } finally {
        loading.value = false;
    }
  };

  // --- Return ---
  return {
    posts,
    categories,
    post,
    loading,
    error,
    fetchPosts,
    fetchCategories,
    fetchPostBySlug,
    formatDate,
  };
}
