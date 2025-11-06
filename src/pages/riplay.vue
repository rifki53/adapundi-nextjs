<script setup>
import Header from "./../components/Header.vue";
import HeroRiplay from "../components/HeroRiplay.vue";
import SectionRiplay1 from "../components/SectionRiplay1.vue";
import SectionRiplay2 from "../components/SectionRiplay2.vue";
import Footer from "../components/Footer.vue";
import SectionRiplay3 from "../components/SectionRiplay3.vue";
import SectionRiplay4 from "../components/SectionRiplay4.vue";
import SectionRiplay5 from "../components/SectionRiplay5.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "riplay"]);

useHead({
  title: "Ringkasan Informasi Produk dan Layanan Adapundi",
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
        "Simak penjelasan lengkap mengenai ringkasan informasi produk dan layanan Adapundi di sini!",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Ringkasan Informasi Produk dan Layanan Adapundi",
    },
    {
      property: "og:description",
      content:
        "Simak penjelasan lengkap mengenai ringkasan informasi produk dan layanan Adapundi di sini!",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/riplay",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/riplay",
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
      <!-- Page sections -->
      <HeroRiplay />
      <SectionRiplay1 />
      <SectionRiplay2 />
      <SectionRiplay3 />
      <SectionRiplay4 />
      <SectionRiplay5 />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
