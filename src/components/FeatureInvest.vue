<template>
  <section class="relative">
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
      aria-hidden="true"
    >
      <div
        class="w-80 h-80 rounded-full bg-linear-to-tr from-green-500 to-green-900 opacity-40 blur-[160px] will-change-[filter]"
      ></div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Keuntungan Pendanaan Bersama Adapundi
          </h2>
        </div>

        <!-- Grid -->
        <div
          class="grid lg:grid-cols-2 gap-6 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] *:p-6 md:*:px-10 md:*:py-12 *:relative *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-green-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-inline-start:-1px] *:before:[inset-block-start:0]"
        >
          <!-- Item 1: Perlindungan Hukum -->
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <i class="pi pi-shield text-green-500 text-xl"></i>
              <span>Perlindungan Hukum</span>
            </h3>
            <p class="text-sm text-gray-700">
              Saat ini Adapundi telah mendapatkan izin dari Otoritas Jasa
              Keuangan(OJK) dan merupakan perusahaan teknologi keuangan yang
              memenuhi standar operasional di Indonesia.
            </p>
          </article>

          <!-- Item 2: Kekuatan Teknis yang Termuka -->
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <i class="pi pi-server text-green-500 text-xl"></i>
              <span>Kekuatan Teknis yang Termuka</span>
            </h3>
            <p class="text-sm text-gray-700">
              Mode kontrol Big Data dan sistem anti-penipuan untuk melindungi
              pendanaan Anda.
            </p>
          </article>

          <!-- Item 3: Keuntungan Besar -->
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <i class="pi pi-chart-line text-green-500 text-xl"></i>
              <span>Keuntungan Besar</span>
            </h3>
            <p class="text-sm text-gray-700">
              Suku bunga tahunan kompetitif untuk memberikan pengembalian
              terhadap pembiayaan Anda.
            </p>
          </article>

          <!-- Item 4: Partisipasi dalam Membangun Ekonomi -->
          <article>
            <h3 class="font-medium flex items-center space-x-2 mb-2">
              <i class="pi pi-building text-green-500 text-xl"></i>
              <span>Partisipasi dalam Membangun Ekonomi</span>
            </h3>
            <p class="text-sm text-gray-700">
              Pembiayaan akan diberikan kepada pengusaha kecil di Indonesia
              untuk membantu mengembangkan ekonomi.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
