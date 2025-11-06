<script setup>
import Header from "./../components/Header.vue";
import AboutSection1 from "../components/AboutSection1.vue";
import AboutSection2 from "../components/AboutSection2.vue";
import AboutSection3 from "../components/AboutSection3.vue";
import AboutSection4 from "../components/AboutSection4.vue";
import AboutSection5 from "../components/AboutSection5.vue";
import AboutSection6 from "../components/AboutSection6.vue";
import AboutSection7 from "../components/AboutSection7.vue";
import AboutSection8 from "../components/AboutSection8.vue";
import AboutSection9 from "../components/AboutSection9.vue";
import Footer from "../components/Footer.vue";
import { useHead } from "@unhead/vue";
import { aboutPageSchema, generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "about"]);

useHead({
  title: "Tentang Adapundi | Aplikasi Pinjaman Daring OJK",
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
        "Temukan informasi tentang aplikasi Adapundi, Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Tentang Adapundi | Aplikasi Pinjaman Daring OJK",
    },
    {
      property: "og:description",
      content:
        "Temukan informasi tentang aplikasi Adapundi, Aplikasi pinjaman daring terpercaya yang terdaftar di OJK dan resmi tergabung di AFPI.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/about",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/about",
    },
  ],
  script: [
    ...aboutPageSchema.map((schema, index) => ({
      type: "application/ld+json",
      key: `about-schema-${index}`,
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
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
      <AboutSection6 />
      <AboutSection7 />
      <AboutSection8 />
      <AboutSection9 />

    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
