<script setup>
import bgImage from '@/images/bgslide/eclipse.png';
import icon1 from '@/images/icon/ic-1.png';
import icon2 from '@/images/icon/ic-2.png';
import icon3 from '@/images/icon/ic-3.png';
import icon4 from '@/images/icon/ic-4.png';

const featureCards = [
  {
    id: 1,
    icon: icon1,
    title: 'Limit Tinggi',
    description: 'Dengan KTP Anda dapat meminjam hingga Rp100.000.000',
  },
  {
    id: 2,
    icon: icon4,
    title: 'Bunga Rendah',
    description: 'Nikmati bunga harian mulai 0,03% untuk ajukan pinjaman',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Tanpa Jaminan',
    description: 'Tidak perlu jaminan dan syarat rumit untuk ajukan pinjaman',
  },
  {
    id: 4,
    icon: icon2,
    title: 'Proses Cepat',
    description: 'Online 24 jam, seluruh proses pengajuan cepat hanya 15 menit',
  },
];
</script>

<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto pt-8 md:pt-14 px-4 sm:px-6 pb-14 md:pb-0">
      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center pb-4 md:pb-8">
        <h2 class="h2 font-bold mb-4">
          Inklusi Finansial Untuk Semua
        </h2>
      </div>
      <div class="container mx-auto mt-5">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="card in featureCards" :key="card.id" class="text-center">
            <img
              :src="card.icon"
              alt="Icon"
              class="mx-auto"
              width="80"
              height="70"
              loading="lazy"
            />
            <h3 class="mt-4 mb-3 text-gray-800 font-semibold">
              {{ card.title }}
            </h3>
            <p class="p text-gray-600 w-full px-2">
              {{ card.description }}
            </p>
          </div>
        </div>

        <!-- Statistics Section with Background -->
        <div class="hidden md:block relative mt-12 mx-auto w-[896px] h-[217px]">
          <!-- Background Image Container -->
          <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="{
              backgroundImage: `url(${bgImage})`,
            }"
          ></div>

          <!-- Content Container -->
          <div class="relative h-full flex items-center">
            <div class="w-full px-16 md:px-32">
              <div class="flex flex-col items-center gap-4">
                <!-- Top Section -->
                <div class="text-center mb-2">
                  <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">
                    +97,7 JUTA
                  </h2>
                  <p class="text-base md:text-lg font-medium text-white">
                    <span class="text-white text-sm md:text-base">
                      Masyarakat
                      <span class="italic">Unbankable</span> Terjangkau
                      <span class="relative group">
                        <span class="cursor-pointer">*</span>
                        <span
                          class="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                        >
                          Data World Bank 2021
                        </span>
                      </span>
                    </span>
                  </p>
                </div>

                <!-- Bottom Section - Flex Row -->
                <div class="flex flex-row justify-center gap-16 md:gap-24">
                  <!-- First Stat -->
                  <div class="text-center">
                    <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">
                      +3,6 JUTA ORANG
                    </h2>
                    <p class="text-base md:text-lg font-medium text-white">
                      <span class="text-white text-sm md:text-base">
                        Menggunakan Adapundi
                        <span class="relative group">
                          <span class="cursor-pointer">*</span>
                          <span
                            class="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                          >
                            Data per Maret 2025
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <!-- Second Stat -->
                  <div class="text-center">
                    <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">
                      +724 RIBU UMKM
                    </h2>
                    <p class="text-base md:text-lg font-medium text-white">
                      <span class="text-white text-sm md:text-base">
                        Menerima Permodalan
                        <span class="relative group">
                          <span class="cursor-pointer">*</span>
                          <span
                            class="absolute top-[-100%] left-full transform -translate-y-1/2 ml-3 w-max px-4 py-2 bg-black text-white text-sm rounded-t-xl rounded-br-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                          >
                            Data per Maret 2025
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
