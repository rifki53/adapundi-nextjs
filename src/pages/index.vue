<script setup>

import { useHead } from '@unhead/vue'
import { homePageSchemas, generateBreadcrumbSchema } from '~/utils/schemas.js'

const breadcrumb = generateBreadcrumbSchema(['home'])

useHead({
  title: 'Adapundi: Aplikasi Pinjaman Daring Terpercaya',
  htmlAttrs: {
    lang: 'id',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'description',
      content:
        'Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!',
    },
    {
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      property: 'og:title',
      content: 'Adapundi: Aplikasi Pinjaman Daring Terpercaya',
    },
    {
      property: 'og:description',
      content:
        'Pinjaman aman dipercaya hampir 30 juta pengguna, dengan 14 juta+ pencairan telah disalurkan, serta berizin dan diawasi selama 7 tahun. Download Adapundi sekarang!',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.adapundi.com/',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.adapundi.com/',
    },
  ],
  script: [
    ...homePageSchemas.map((schema, index) => ({
      type: 'application/ld+json',
      key: `home-schema-${index}`,
      innerHTML: JSON.stringify(schema),
    })),
    {
      type: 'application/ld+json',
      key: 'breadcrumb-schema',
      innerHTML: JSON.stringify(breadcrumb),
    },
  ],
})
</script>

<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Komponen Header akan otomatis terbaca -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <CarouselHome />
      <WhyHero />
      <HowToHero />
      <LoanHero1 />
      <LoanHero2 />
      <LoanHero3 />
      <WallOfLoveHome />
      <CarouselPartner />
      <CarouselRegulator />
    </main>

    <!-- Komponen Footer akan otomatis terbaca -->
    <Footer />
  </div>
</template>
