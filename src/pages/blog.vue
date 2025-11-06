<script setup>
import Header from "./../components/Header.vue";
import BlogList from "./../components/BlogList.vue";
import Footer from "./../components/Footer.vue";
import { useHead } from "@unhead/vue";
import HeroTitleAlt from "../components/HeroTitleAlt.vue";

useHead({
  title: "Blog - Adapundi",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content:
        "Baca artikel terbaru seputar keuangan, tips pinjaman, dan informasi terkini dari Adapundi. Dapatkan wawasan finansial yang bermanfaat untuk kehidupan Anda.",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Blog - Adapundi",
    },
    {
      property: "og:description",
      content:
        "Baca artikel terbaru seputar keuangan, tips pinjaman, dan informasi terkini dari Adapundi. Dapatkan wawasan finansial yang bermanfaat untuk kehidupan Anda.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/blog",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/blog",
    },
  ],
});
</script>

<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <HeroTitleAlt
        title="Terkini di Adapundi"
        description="Cek berita dan kegiatan terbaru di sini"
        :isBlog="true"
      />

      <!-- Page sections -->
      <BlogList />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
