<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) =>
      ["organization", "navigation", "website", "breadcrumb", "faq"].includes(
        value,
      ),
  },
});

const organizationSchema = computed(() => ({
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Adapundi",
    url: "https://www.adapundi.com/",
    logo: "https://www.adapundi.com/assets/AP-logo-BCx-qDrM.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+622150860666",
        contactType: "Customer Service",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      {
        "@type": "ContactPoint",
        email: "cs@adapundi.com",
        contactType: "Email Support",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      {
        "@type": "ContactPoint",
        telephone: "+6281299925778",
        contactType: "WhatsApp",
        areaServed: "ID",
        availableLanguage: "Indonesian",
        url: "https://wa.me/6281299925778",
      },
    ],
    address: {
      // Added address
      "@type": "PostalAddress",
      streetAddress:
        "Capital Place, Lantai 48, Jl. Jend. Gatot Subroto No. Kav. 18, RT.6/RW.1, Kuningan Barat, Mampang Prapatan",
      addressLocality: "Kota Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12710",
      addressCountry: "ID",
    },
    sameAs: [
      "https://www.facebook.com/adapundi.official.indonesia",
      "https://www.instagram.com/adapundi_official_id/",
      "https://www.tiktok.com/@adapundi_official_id",
      "https://www.youtube.com/@adapundiofficialid",
      "https://www.linkedin.com/company/adapundi/",
    ],
  }),
}));

const navigationSchema = computed(() => ({
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Pinjaman",
        url: "https://www.adapundi.com/loans",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Pendanaan",
        url: "https://www.adapundi.com/investment",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Kisah Inspiratif",
        url: "https://www.adapundi.com/testimonial",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Antifraud",
        url: "https://www.adapundi.com/antifraud",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Tentang Adapundi",
        url: "https://www.adapundi.com/about",
      },
    ],
  }),
}));

const websiteSchema = computed(() => ({
  __html: JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Adapundi",
    url: "https://www.adapundi.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }),
}));

const breadcrumbSchema = computed(() => ({
  __html: JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.adapundi.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pinjaman",
        item: "https://www.adapundi.com/loans",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pendanaan",
        item: "https://www.adapundi.com/investment",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tentang Adapundi",
        item: "https://www.adapundi.com/about",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Kisah Inspiratif",
        item: "https://www.adapundi.com/testimonial",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "RIPLAY",
        item: "https://www.adapundi.com/riplay",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Antifraud",
        item: "https://www.adapundi.com/antifraud",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "FAQ",
        item: "https://www.adapundi.com/faq",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Syarat dan Ketentuan",
        item: "https://www.adapundi.com/term-condition",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Kebijakan Privasi",
        item: "https://www.adapundi.com/privacy-policy",
      },
    ],
  }),
}));

const getSchema = computed(() => {
  switch (props.type) {
    case "organization":
      return organizationSchema.value;
    case "navigation":
      return navigationSchema.value;
    case "website":
      return websiteSchema.value;
    case "breadcrumb":
      return breadcrumbSchema.value;
    default:
      return null;
  }
});
</script>

<template>
  <div v-if="getSchema" style="display: none">
    <div
      v-html="
        `<script type='application/ld+json'>${getSchema.__html}<\/script>`
      "
    ></div>
  </div>
</template>
