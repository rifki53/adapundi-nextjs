<script setup>
import { ref } from 'vue';

// 1. Impor semua aset gambar yang akan digunakan
import iconKeuntungan from '@/images/icon/convert.png';
import iconPengguna from '@/images/icon/planet.png';
import iconRisiko from '@/images/icon/bars.png';

// 2. Definisikan data fitur dalam sebuah array
const advantages = ref([
  {
    imgSrc: iconKeuntungan,
    imgAlt: 'Potensi Keuntungan Icon',
    title: 'Keuntungan Kompetitif',
    description: 'Imbal hasil kompetitif dikelola dengan baik serta akuntabel.',
  },
  {
    imgSrc: iconPengguna,
    imgAlt: 'Basis Pengguna Icon',
    title: 'Basis Pengguna Luas',
    description: 'Adapundi telah menjadi pilihan jutaan pengguna di Indonesia.',
  },
  {
    imgSrc: iconRisiko,
    imgAlt: 'Manajemen Risiko Icon',
    title: 'Risiko Terkendali',
    description: 'Kami membantu meminimalisir NPL (Non-Performing Loan).',
  },
]);
</script>

<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <!-- Heading -->
      <h2 class="h2 text-gray-900 font-bold mb-16 text-center md:text-left">
        Keunggulan Pendanaan
      </h2>

      <!-- Grid Container - UPDATED: Breakpoint diubah dari md ke lg -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12">
        <!-- Looping melalui array 'advantages' -->
        <!-- UPDATED: Breakpoint diubah dari md ke lg -->
        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          class="flex flex-row items-start gap-4 lg:flex-col lg:items-center lg:text-center"
        >
          <!-- Ukuran gambar disederhanakan kembali -->
          <img
            :src="advantage.imgSrc"
            :alt="advantage.imgAlt"
            class="w-[6.5rem] flex-shrink-0 object-contain"
            loading="lazy"
          />
          <div>
            <h3 class="text-xl font-bold text-black mb-2">
              {{ advantage.title }}
            </h3>
            <p class="text-base font-medium text-black">
              {{ advantage.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
