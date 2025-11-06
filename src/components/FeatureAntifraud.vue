<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <!-- Main Container -->
      <div
        class="bg-white rounded-[30px] overflow-hidden p-6 md:p-12 shadow-lg"
      >
        <!-- Content Box -->
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Left Content -->
          <div class="flex-1">
            <h2
              class="text-black text-2xl md:text-4xl font-bold leading-tight mb-6"
            >
              Waspada Penipuan
            </h2>

            <p
              class="text-black text-sm md:text-base font-normal leading-normal mb-8"
            >
              Adapundi menghimbau Anda untuk menjaga data pribadi sebaik
              mungkin. Jangan pernah memberikan kode OTP kepada siapapun. Ketika
              melakukan pelunasan, Jangan melakukan transfer ke nomor Virtual
              Account selain yang tertera pada aplikasi!
              <br /><br />
              HATI-HATI. TRANSAKSI INI BERISIKO TINGGI. ANDA DAPAT SAJA
              MENGALAMI KERUGIAN ATAU KEHILANGAN UANG. JANGAN BERUTANG JIKA
              TIDAK MEMILIKI KEMAMPUAN MEMBAYAR. PERTIMBANGKAN SECARA BIJAK
              SEBELUM BERTRANSAKSI.
            </p>

            <!-- Button -->
            <button
              class="w-full sm:w-auto bg-custom-green-dark text-white rounded-[10px] px-8 py-2.5 font-bold text-sm hover:bg-custom-green-darker transition-all"
            >
              PELAJARI SELENGKAPNYA
            </button>
          </div>

          <!-- Right Image -->
          <div class="lg:w-[302px] flex-shrink-0">
            <img
              class="w-full h-[250px] md:h-[300px] lg:h-[369px] rounded-[10px] object-cover"
              src="@/images/illustration/antifraud-ilustration.png"
              alt="Warning Image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add any required script logic here
</script>
