<template>
  <section class="relative bg-gray-50">
    <div class="max-w-6xl mx-auto py-8 md:py-14 px-4 sm:px-6">
      <!-- Mengubah warna border dan menambah shadow untuk tetap memberikan emphasis -->
      <div
        class="bg-white rounded-[30px] overflow-hidden p-6 md:p-12 shadow-lg"
      >
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left Content -->
          <div class="flex-1">
            <h2 class="text-black text-2xl md:text-4xl font-bold mb-6">
              Solusi Keuangan Anda
            </h2>

            <p class="text-gray-800 text-sm md:text-base font-normal mb-6">
              Adapundi adalah salah satu platform pinjaman tanpa jaminan di
              Indonesia, misi kami adalah untuk menyediakan pinjaman yang aman
              dan nyaman bagi pengguna. Adapundi mengikuti konsep "membuat hidup
              lebih baik" dan mendukung inovasi keuangan yang didukung oleh
              perkembangan teknologi.
            </p>

            <!-- Mengubah warna teks menjadi lebih gelap -->
            <h3
              class="text-custom-green-dark text-2xl md:text-3xl font-semibold mb-8"
            >
              #AdapundiAndalanmu
            </h3>

            <!-- Buttons dengan warna yang lebih gelap -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="w-full sm:w-auto bg-custom-green-dark text-white rounded-[10px] px-6 py-2.5 font-bold text-sm hover:opacity-90 transition-all"
              >
                AJUKAN PINJAMAN
              </button>
              <button
                class="w-full sm:w-auto bg-custom-green-dark text-white rounded-[10px] px-6 py-2.5 font-bold text-sm hover:opacity-90 transition-all"
              >
                AJUKAN PENDANAAN
              </button>
            </div>
          </div>

          <!-- Right Image -->
          <div class="lg:w-[302px] flex-shrink-0">
            <img
              class="w-full md:h-[300px] lg:h-[369px] rounded-[10px] object-contain"
              src="@/images/illustration/route-ilustration.png"
              alt="Feature Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Tambahkan di file Tailwind config atau style global */
</style>
