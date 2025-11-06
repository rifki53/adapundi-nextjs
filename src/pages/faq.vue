<script setup>
import Header from "./../components/Header.vue";
import FaqSection from "./../components/FaqSection.vue";
import Footer from "./../components/Footer.vue";
import HeroTitleAlt from "../components/HeroTitleAlt.vue";
import FaqSectionCTA from "../components/FaqSectionCTA.vue";
import { useHead } from "@unhead/vue";
import { faqPageSchema, generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "faq"]);

useHead({
  title: "FAQ Seputar Layanan dan Produk Adapundi",
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
        "Temukan jawaban dari berbagai pertanyaan terkait layanan dan produk Adapundi untuk mendukung kemudahan Anda.",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "FAQ Seputar Layanan dan Produk Adapundi",
    },
    {
      property: "og:description",
      content:
        "Temukan jawaban dari berbagai pertanyaan terkait layanan dan produk Adapundi untuk mendukung kemudahan Anda.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/faq",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/faq",
    },
  ],
  script: [
    ...faqPageSchema.map((schema, index) => ({
      type: "application/ld+json",
      key: `faq-schema-${index}`,
      innerHTML: JSON.stringify(schema),
    })),
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
      <!-- <HeroTitle title="Pertanyaan Umum" /> -->
      <HeroTitleAlt
        title="Pertanyaan Seputar Adapundi"
        description="Temukan jawaban terkait layanan dan produk pinjaman dana tunai Adapundi"
      />
      <FaqSection />
      <!-- <CommonAsk /> -->
      <FaqSectionCTA />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
