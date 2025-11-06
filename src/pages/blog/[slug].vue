<script setup>
import Header from './../components/Header.vue'
import PostSingle from './../components/PostSingle.vue'
import Footer from './../components/Footer.vue'
import { useHead } from "@unhead/vue";

useHead({
  title: "Artikel - Adapundi",
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
      content: "Baca artikel lengkap dari Adapundi. Dapatkan informasi mendalam seputar keuangan, tips pinjaman, dan solusi finansial terpercaya.",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Artikel - Adapundi",
    },
    {
      property: "og:description",
      content: "Baca artikel lengkap dari Adapundi. Dapatkan informasi mendalam seputar keuangan, tips pinjaman, dan solusi finansial terpercaya.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/blog/post",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/blog/post",
    },
  ],
});
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PostSingle />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>
