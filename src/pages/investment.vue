<script setup>
import Header from "./../components/Header.vue";
import SectionInvestment from "../components/SectionInvestment.vue";
import SectionInvestment2 from "../components/SectionInvestment2.vue";
import SectionInvestment3 from "../components/SectionInvestment3.vue";
import SectionInvestment4 from "../components/SectionInvestment4.vue";
import Footer from "./../components/Footer.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "investment"]);

useHead({
  title: "Program Pendanaan Adapundi, Jadi Lender Partner Sekarang!",
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
        "Adapundi membuka kesempatan kepada Anda untuk menjadi lender partner dengan imbalan bagi hasil yang kompetitif dan keuntungan lainnya.",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Program Pendanaan Adapundi, Jadi Lender Partner Sekarang!",
    },
    {
      property: "og:description",
      content:
        "Adapundi membuka kesempatan kepada Anda untuk menjadi lender partner dengan imbalan bagi hasil yang kompetitif dan keuntungan lainnya.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/investment",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/investment",
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
      <SectionInvestment />
      <SectionInvestment2 />
      <SectionInvestment3 />
      <SectionInvestment4 />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
