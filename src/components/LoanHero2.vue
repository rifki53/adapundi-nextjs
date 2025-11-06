<!-- loan2: SOLUSI FINAL DENGAN RESPONSIVE HEIGHT -->
<template>
  <section class="relative bg-gray-100">
    <div class="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <!-- Urutan dibalik di mobile (flex-col-reverse), gambar di kanan di desktop (md:flex-row) -->
      <div class="flex flex-col-reverse md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
        <!-- Content Section (SUDAH DIPERBAIKI) -->
        <div class="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
          <h2 class="h2 text-center md:text-left">
            Lebih Ringan, Atur<br />
            Sesuai Kebutuhan
          </h2>
          <!-- flex-grow dihapus dari sini -->
          <div class="space-y-4">
            <p class="p">
              Mulai dari kebutuhan rumah tangga hingga bisnis, Adapundi hadir
              untuk menemani Anda dengan menyediakan pinjaman yang aman dan
              nyaman bagi pengguna.
            </p>
            <p class="p">
              Adapundi berperan aktif dalam mendukung kebutuhan finansial jutaan
              pelanggan, mendorong inklusi keuangan, dan mempercepat pertumbuhan
              ekonomi nasional.
            </p>
          </div>
          <!-- mt-auto dihapus dari sini -->
          <router-link
            to="/testimonial"
            class="bg-custom-green text-white font-bold text-sm text-center py-2.5 px-4 rounded-[10px] w-full md:w-fit hover:bg-[#0fb933] transition-colors"
          >
            TEMUKAN INSPIRASI
          </router-link>
        </div>

        <!-- Image Section -->
        <div class="w-full md:w-1/2">
          <img
            class="w-full rounded-[10px] object-cover lg:h-full"
            src="@/images/hero-image/hero-2.png"
            alt="Adapundi Services"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
