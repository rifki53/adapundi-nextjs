<script setup>
import Header from "./../components/Header.vue";
import SecurityGuidelines from "./../components/SecurityGuidelines.vue";
import ContactSection from "./../components/ContactSection.vue";
import HeroTitleAlt from "./../components/HeroTitleAlt.vue";
import AntiFraudSection from "../components/AntiFraudSection.vue";
import Footer from "./../components/Footer.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "antifraud"]);

useHead({
  title: "Kenali Modus Penipuan Pinjaman Daring dan Tips Mengatasinya",
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
        "Panduan antifraud untuk memastikan transaksi aman dan Anda terhindar penipuan yang mengatasnamakan Adapundi.",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Kenali Modus Penipuan Pinjaman Daring dan Tips Mengatasinya",
    },
    {
      property: "og:description",
      content:
        "Panduan antifraud untuk memastikan transaksi aman dan Anda terhindar penipuan yang mengatasnamakan Adapundi.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/antifraud",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/antifraud",
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
      <HeroTitleAlt
        title="Waspada Penipuan!<br> Simak Tipsnya Agar Transaksi Aman"
        description="Kenali ciri-ciri penipuan pinjaman daring yang mengatasnamakan Adapundi dan selalu waspada!"
      />
      <SecurityGuidelines />
      <AntiFraudSection />
      <ContactSection />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
