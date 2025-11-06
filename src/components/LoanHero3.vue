<!-- loan3: SOLUSI FINAL DENGAN RESPONSIVE HEIGHT -->
<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6">
        <!-- Image Section -->
        <div class="w-full md:w-1/2">
          <img
            class="w-full rounded-[10px] object-cover lg:h-full"
            src="@/images/hero-image/hero-3.png"
            alt="Data Security"
            loading="lazy"
          />
        </div>

        <!-- Content Section (SUDAH DIPERBAIKI) -->
        <div class="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">
          <h2 class="h2 text-center md:text-left">
            Keamanan Data Anda<br />
            Komitmen Utama Kami
          </h2>
          <!-- flex-grow dihapus dari sini -->
          <div class="space-y-4">
            <p class="p">
              Adapundi memastikan perlindungan data terbaik dengan sertifikasi
              SNI ISO/IEC 27001:2022, standar tertinggi untuk sistem manajemen
              keamanan informasi.
            </p>
            <p class="text-base mt-2">
              HATI-HATI. TRANSAKSI INI BERISIKO TINGGI. ANDA DAPAT MENGALAMI
              KERUGIAN ATAU KEHILANGAN UANG. JANGAN BERUTANG JIKA TIDAK MEMILIKI
              KEMAMPUAN MEMBAYAR. PERTIMBANGKAN SECARA BIJAK SEBELUM
              BERTRANSAKSI.
            </p>
          </div>
          <router-link
            to="/antifraud"
            class="bg-custom-green text-white font-bold text-sm text-center py-2.5 px-4 rounded-[10px] w-full md:w-fit hover:bg-[#0fb933] transition-colors"
          >
            CEK TIPSNYA
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
