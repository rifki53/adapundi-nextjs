// src/utils/schemas.ts

// Langkah 1: Definisikan "cetakan" atau interface untuk data kita
interface BreadcrumbItem {
  name: string;
  item: string;
}

// Mendefinisikan tipe untuk objek BREADCRUMB_ITEMS
// Record<string, BreadcrumbItem> berarti sebuah objek dengan key string dan value BreadcrumbItem
type BreadcrumbItems = Record<string, BreadcrumbItem>;

// Langkah 2: Terapkan tipe pada konstanta
export const BREADCRUMB_ITEMS: BreadcrumbItems = {
  home: { name: "Home", item: "https://www.adapundi.com/" },
  loans: { name: "Pinjaman", item: "https://www.adapundi.com/loans" },
  investment: {
    name: "Pendanaan",
    item: "https://www.adapundi.com/investment",
  },
  about: { name: "Tentang Adapundi", item: "https://www.adapundi.com/about" },
  testimonial: {
    name: "Kisah Inspiratif",
    item: "https://www.adapundi.com/testimonial",
  },
  riplay: { name: "RIPLAY", item: "https://www.adapundi.com/riplay" },
  antifraud: { name: "Antifraud", item: "https://www.adapundi.com/antifraud" },
  faq: { name: "FAQ", item: "https://www.adapundi.com/faq" },
  terms: {
    name: "Syarat dan Ketentuan",
    item: "https://www.adapundi.com/term-condition",
  },
  privacy: {
    name: "Kebijakan Privasi",
    item: "https://www.adapundi.com/privacy-policy",
  },
  // Jika Anda menambahkan key baru di sini, TypeScript akan memastikan strukturnya benar
};

// Langkah 3: Perbaiki dan berikan tipe pada fungsi
// Fungsi ini sekarang menerima array dari key yang ada di BREADCRUMB_ITEMS
export function generateBreadcrumbSchema(keys: (keyof typeof BREADCRUMB_ITEMS)[]) {
  const itemListElement = keys.map((key, index) => {
    const itemData = BREADCRUMB_ITEMS[key];
    return {
      "@type": "ListItem",
      position: index + 1,
      name: itemData.name,
      item: itemData.item,
    };
  });

  return {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

// Anda juga bisa memberikan tipe yang lebih spesifik untuk skema lain jika diinginkan,
// tapi menggunakan `any` atau membiarkannya seperti ini juga tidak masalah untuk memulai.
export const homePageSchemas: any[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adapundi",
    url: "https://www.adapundi.com/",
    logo: "https://www.adapundi.com/assets/AP-logo-BCx-qDrM.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+626250860666",
        contactType: "cs Adapundi",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      // ... sisa contact points
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Capital Place, Jl. Gatot Subroto No.18, RT.6/RW.1, Kuningan Barat, Mampang Prapatan, Kota Jakarta Selatan, Jakarta",
      addressLocality: "Jakarta Selatan",
      addressCountry: "ID",
      addressRegion: "DKI Jakarta",
      postalCode: "12710",
    },
    sameAs: [
      "https://www.facebook.com/adapundi.official.indonesia",
      "https://www.instagram.com/adapundi_official_id/",
      "https://www.tiktok.com/@adapundi_official_id",
      "https://www.youtube.com/@adapundiofficialid",
      "https://www.linkedin.com/company/adapundi/",
    ],
  },
];

export const aboutPageSchema: any[] = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang Adapundi",
    url: "https://www.adapundi.com/about",
    description:
      "Temukan informasi tentang aplikasi Adapundi. Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
  },
];

export const faqPageSchema: any[] = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Adapundi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PT. Info Tekno Siaga (Adapundi) adalah perusahaan pendanaan berbasis teknologi yang telah terdaftar dan diawasi OJK. Berdiri sejak tahun 2021, diunduh lebih dari 10 juta penguna di PlayStore dan App store dengan banyak ulasan positif. Adapundi berkomitmen untuk selalu ada bagi mereka yang membutuhkan bantuan dana sementara dengan memberikan akses kemudahan, cepat dan menetapkan standar tertinggi dalam perlindungan dan kerahasiaan data nasabah.",
        },
      },
      // ... sisa FAQ
    ],
  },
];
