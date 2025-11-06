<script setup>
import Header from "./../components/Header.vue";
import Footer from "./../components/Footer.vue";
import HeroTitleAlt from "./../components/HeroTitleAlt.vue";
import Term from "../html-contents/Term.vue";
import TestimonialSection4 from "../components/TestimonialSection4.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "terms"]);

useHead({
  title: "Syarat dan Ketentuan Produk dan Layanan Adapundi",
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
        "Cek syarat dan ketentuan terkait produk dan layanan Adapundi terbaru di sini!",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Syarat dan Ketentuan Produk dan Layanan Adapundi",
    },
    {
      property: "og:description",
      content:
        "Cek syarat dan ketentuan terkait produk dan layanan Adapundi terbaru di sini!",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/term-condition",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/term-condition",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      key: "breadcrumb-schema",
      innerHTML: JSON.stringify(breadcrumb),
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
        title="Syarat dan Ketentuan"
        description="Pembaruan terakhir: 19 Maret 2025"
      />
      <Term />
      <TestimonialSection4 />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
