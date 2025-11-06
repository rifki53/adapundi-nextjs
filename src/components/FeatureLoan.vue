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
              Info Produk
            </h2>
          </div>
  
          <!-- Grid -->
          <div
            class="grid lg:grid-cols-2 gap-6 overflow-hidden border-y [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1] *:p-6 md:*:px-10 md:*:py-12 *:relative *:before:absolute *:before:bg-linear-to-b *:before:from-transparent *:before:via-green-200 *:before:[block-size:100%] *:before:[inline-size:1px] *:before:[inset-inline-start:-1px] *:before:[inset-block-start:0]"
          >
            <!-- Item 1: Limit Pinjaman -->
            <article>
              <h3 class="font-medium flex items-center space-x-2 mb-2">
                <i class="pi pi-money-bill text-green-500 text-xl"></i>
                <span>Limit Pinjaman</span>
              </h3>
              <p class="text-sm text-gray-700">
                Dapatkan limit pinjaman hingga Rp100.000.000 untuk kebutuhan Anda.
              </p>
            </article>
            
            <!-- Item 2: Suku Bunga -->
            <article>
              <h3 class="font-medium flex items-center space-x-2 mb-2">
                <i class="pi pi-percentage text-green-500 text-xl"></i>
                <span>Suku Bunga Pinjaman</span>
              </h3>
              <p class="text-sm text-gray-700">
                Nikmati suku bunga pinjaman yang kompetitif sampai 0.3% per hari.
              </p>
            </article>
            
            <!-- Item 3: Batas Waktu -->
            <article>
              <h3 class="font-medium flex items-center space-x-2 mb-2">
                <i class="pi pi-calendar text-green-500 text-xl"></i>
                <span>Batas Waktu Pinjaman</span>
              </h3>
              <p class="text-sm text-gray-700">
                Pilih jangka waktu pinjaman yang fleksibel mulai dari 30 hingga 360 hari.
              </p>
            </article>
            
            <!-- Item 4: Data yang Dibutuhkan -->
            <article>
              <h3 class="font-medium flex items-center space-x-2 mb-2">
                <i class="pi pi-id-card text-green-500 text-xl"></i>
                <span>Data yang Dibutuhkan</span>
              </h3>
              <p class="text-sm text-gray-700">
                Proses pengajuan yang mudah, hanya membutuhkan KTP sebagai dokumen utama.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  