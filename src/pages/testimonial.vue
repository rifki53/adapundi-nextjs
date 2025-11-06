<script setup>
import Header from "./../components/Header.vue";
import HeroTestimonial from "../components/HeroTestimonial.vue";
import TestimonialSection1 from "../components/TestimonialSection1.vue";
import Footer from "../components/Footer.vue";
import TestimonialSection2 from "../components/TestimonialSection2.vue";
import TestimonialSection3 from "../components/TestimonialSection3.vue";
import TestimonialSection4 from "../components/TestimonialSection4.vue";
import { useHead } from "@unhead/vue";
import { generateBreadcrumbSchema } from "~/utils/schemas.js";

const breadcrumb = generateBreadcrumbSchema(["home", "testimonial"]);

useHead({
  title: "Kisah Inspiratif dan Ulasan Seputar Adapundi",
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
        "Temukan berbagai kisah inspiratif bagaimana Adapundi memberikan dampak postif bagi para penggunanya",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      property: "og:title",
      content: "Kisah Inspiratif dan Ulasan Seputar Adapundi",
    },
    {
      property: "og:description",
      content:
        "Temukan berbagai kisah inspiratif bagaimana Adapundi memberikan dampak postif bagi para penggunanya",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.adapundi.com/testimonial",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.adapundi.com/testimonial",
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
      <HeroTestimonial />
      <TestimonialSection1 />
      <TestimonialSection3 />
      <TestimonialSection2 />
      <TestimonialSection4 />
      <!-- <WallOfLoveHome /> -->
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
