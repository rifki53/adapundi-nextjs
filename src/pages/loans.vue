<script setup>
import { useHead } from '@unhead/vue'
import { generateBreadcrumbSchema } from '~/utils/schemas.js'

const breadcrumb = generateBreadcrumbSchema(['home', 'loans'])

useHead({
  title: 'Pinjaman Daring Legal Cepat Cair Tanpa Jaminan, Cukup KTP',
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
        'Lakukan simulasi pinjaman Adapundi, dapat limit hingga 100 juta cukup KTP dengan proses pencairan cepat.',
    },
    {
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      property: 'og:title',
      content: 'Pinjaman Daring Legal Cepat Cair Tanpa Jaminan, Cukup KTP',
    },
    {
      property: 'og:description',
      content:
        'Lakukan simulasi pinjaman Adapundi, dapat limit hingga 100 juta cukup KTP dengan proses pencairan cepat.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.adapundi.com/loans',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.adapundi.com/loans',
    },
  ],
  script: [
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
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <LoanSectionAlt />
      <SectionLoanPage />
      <SectionLoanPage2 />
      <SectionLoanPage3 />
      <SectionLoanPage4 />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>
