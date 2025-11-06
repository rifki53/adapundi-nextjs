<script setup>
import Header from "./../components/Header.vue";
import Footer from "./../components/Footer.vue";
import HeroTitleAlt from "./../components/HeroTitleAlt.vue";
import Privacy from "../html-contents/Privacy.vue";
import TestimonialSection4 from "../components/TestimonialSection4.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "privacy"]);

useHead({
  title: "Privacy Policy Aplikasi Adapundi",
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
        "Pelajari lebih lanjut tentang privacy policy aplikasi Adapundi terbaru di sini!",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Privacy Policy Aplikasi Adapundi",
    },
    {
      property: "og:description",
      content:
        "Pelajari lebih lanjut tentang privacy policy aplikasi Adapundi terbaru di sini!",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/privacy-policy",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/privacy-policy",
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
        title="Kebijakan Privasi"
        description="Pembaruan terakhir: 15 Juli 2025"
      />
      <Privacy />
      <TestimonialSection4 />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
