<script setup>
import { ref } from 'vue';

// 1. Impor semua aset gambar yang akan digunakan
import iconProses from '@/images/icon/nate-2.png';
import iconLimit from '@/images/icon/calcu.png';
import iconCepat from '@/images/icon/clock.png';
import iconRingan from '@/images/icon/interest.png';

// 2. Gunakan variabel hasil import di dalam array
const features = ref([
  {
    imgSrc: iconProses, // Gunakan variabel, bukan string path
    imgAlt: 'Proses Pengajuan Icon',
    title: 'Proses Pengajuan Mudah',
    description: 'Pengajuan pinjaman hanya butuh nomor HP dan KTP.',
  },
  {
    imgSrc: iconLimit, // Gunakan variabel
    imgAlt: 'Limit Pinjaman Icon',
    title: 'Limit Pinjaman Tinggi',
    description: 'Pinjaman tanpa jaminan, limit hingga Rp100 juta.',
  },
  {
    imgSrc: iconCepat, // Gunakan variabel
    imgAlt: 'Pencairan Dana Icon',
    title: 'Pencairan Dana Cepat',
    description: 'Dalam hitungan menit dana cair langsung ke rekening.',
  },
  {
    imgSrc: iconRingan, // Gunakan variabel
    imgAlt: 'Cicilan Bulanan Icon',
    title: 'Cicilan Bulanan Ringan',
    description: 'Bunga harian mulai dari 0,03% tenor hingga 12 bulan.',
  },
]);
</script>

<template>
  <section class="bg-white py-12 md:py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="h2 text-gray-900 mb-12 md:mb-16 text-center md:text-left">
        Keunggulan Adapundi
      </h2>

      <!-- Grid Container -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12"
      >
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-center text-left gap-4 md:gap-6"
        >
          <!-- Ukuran gambar yang konsisten -->
          <img
            :src="feature.imgSrc"
            :alt="feature.imgAlt"
            class="w-24 h-24 md:w-28 md:h-28 object-contain flex-shrink-0"
            loading="lazy"
          />
          <div class="flex-1">
            <h4 class="h4 md:text-[25px] font-bold text-black mb-2 md:mb-3">
              {{ feature.title }}
            </h4>
            <p class="text-base md:text-lg text-black">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
