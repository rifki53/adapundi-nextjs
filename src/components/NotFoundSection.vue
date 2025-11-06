<template>
  <section class="relative">
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-28">
      <div class="w-full flex flex-col md:flex-row items-center md:items-start">
        <!-- Left: Image -->
        <div
          class="w-full md:w-1/2 flex items-center justify-center md:justify-end p-4 md:p-6"
        >
          <img
            src="@/images/punpun/skate.png"
            alt="Not Found"
            class="w-60 md:w-72 max-w-full"
          />
        </div>
        <!-- Right: Content -->
        <div
          class="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4 md:p-8 text-center md:text-left"
        >
          <h1
            class="text-6xl sm:text-7xl md:text-[12rem] font-bold text-[#FE812A] mb-2"
          >
            404
          </h1>
          <h2
            class="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-gray-800"
          >
            Page Not Found
          </h2>
          <p class="text-gray-600 mb-6 text-base sm:text-lg">
            Maaf, halaman tidak dapat ditemukan. Periksa ulang alamat URL dan
            coba lagi. Atau klik tombol di bawah ini.
          </p>
          <router-link
            to="/"
            class="w-full sm:w-fit px-12 py-4 bg-[#2ACF27] text-white rounded-full hover:bg-[#26b023] transition text-xl font-bold"
          >
            Beranda
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
