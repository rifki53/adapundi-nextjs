<script setup>
import { ref, computed, onMounted } from 'vue';
// Import images
import app1 from '@/images/shot/app-1.png';
import app2 from '@/images/shot/app-2.png';
import app3 from '@/images/shot/app-3.png';
import app4 from '@/images/shot/app-4.png';
import androidLogo from '@/images/download/android-cta-logo.png';
import iosLogo from '@/images/download/ios-cta-logo.png';

// OneLink URLs
const androidOneLinkUrl = 'https://adapundi.onelink.me/cN17/em5uj56b'; // media source: website_gp
const iosOneLinkUrl = 'https://adapundi.onelink.me/cN17/szh8qiwc'; // media source: website_ios

const stepActive = ref(1);
const previousStep = ref(1);

const images = {
  1: app1,
  2: app2,
  3: app3,
  4: app4,
};

const alts = {
  1: 'Download App img',
  2: 'Isi Data img',
  3: 'Verifikasi img',
  4: 'Pencairan Dana img',
};

const stepTitles = ['Download App', 'Isi Data', 'Verifikasi', 'Pencairan Dana'];

const stepDescriptions = [
  'Download aplikasi Adapundi di Google Play dan App Store.',
  'Cukup siapkan KTP dan isi data diri, lalu ikuti petunjuk pada aplikasi.',
  'Sistem akan mengevaluasi secara otomatis dan memberikan hasil segera.',
  'Dalam hitungan menit dana dicairkan setelah pengajuan Anda disetujui.',
];

const currentImage = computed(() => images[stepActive.value]);
const currentAlt = computed(() => alts[stepActive.value]);

const moveStepActive = (step) => {
  if (step === stepActive.value) return;
  previousStep.value = stepActive.value;
  stepActive.value = step;
};

onMounted(() => {
  // Preload all images at once for instant transitions
  Object.values(images).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});
</script>

<template>
  <section class="relative bg-slate-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div>
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-4 md:pb-8">
          <!-- UPDATED: Menggunakan kelas .h2 -->
          <h2 class="h2">Pencairan Satset Pakai Adapundi</h2>
        </div>

        <!-- Main container -->
        <div
          class="flex flex-col md:flex-row justify-center md:space-x-8 items-center"
        >
          <!-- Image container -->
          <div class="md:w-1/2 w-full">
            <div class="relative min-h-[450px] h-full">
              <Transition
                enter-active-class="transition ease-out duration-300"
                enter-from-class="opacity-0 transform translate-x-8"
                enter-to-class="opacity-100 transform translate-x-0"
                leave-active-class="transition ease-in duration-300 absolute"
                leave-from-class="opacity-100 transform translate-x-0"
                leave-to-class="opacity-0 transform -translate-x-8"
              >
                <img
                  :key="stepActive"
                  :src="currentImage"
                  :class="[
                    'absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0',
                    'h-full w-[25rem] object-contain',
                    'transform-gpu will-change-[transform,opacity]',
                  ]"
                  :alt="currentAlt"
                  loading="lazy"
                />
              </Transition>
            </div>
          </div>

          <!-- Steps container -->
          <div class="md:w-1/2 md:pl-0 md:mt-4 pt-4 relative space-y-6">
            <div
              v-for="step in 4"
              :key="step"
              class="flex cursor-pointer h-[5rem] rounded-md transition-all duration-200"
              @click="moveStepActive(step)"
            >
              <div class="w-1/6 relative flex justify-center">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 bg-white transition-transform duration-200"
                >
                  <button
                    type="button"
                    class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all duration-200"
                    :class="{
                      'bg-green-500 text-white': stepActive >= step,
                      'border-2 border-green-300 text-green-500':
                        stepActive < step,
                    }"
                  >
                    {{ step }}
                  </button>
                </div>

                <div
                  v-if="step !== 4"
                  class="absolute top-10 h-full left-1/2 w-0.5 -translate-x-1/2 transition-colors duration-200"
                  :class="{
                    'bg-green-500': stepActive >= step,
                    'bg-green-300': stepActive < step,
                  }"
                ></div>
              </div>
              <div class="w-5/6 pl-4">
                <!-- UPDATED: Menggunakan kelas .h4 -->
                <h4 class="h4 mb-2">
                  {{ stepTitles[step - 1] }}
                </h4>
                <!-- UPDATED: Menggunakan kelas .p -->
                <p class="p">
                  {{ stepDescriptions[step - 1] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Button container (Tidak diubah) -->
        <div class="flex justify-center mt-8 px-4 md:px-0">
          <div class="flex justify-center items-center gap-2 sm:gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="androidOneLinkUrl"
              class="bg-custom-green rounded-2xl p-3 flex justify-center items-center hover:bg-green-600 transition-colors duration-200"
            >
              <img
                :src="androidLogo"
                class="h-auto brightness-0 invert w-[120px] sm:w-[150px]"
                alt="Android Download"
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              :href="iosOneLinkUrl"
              class="bg-custom-green rounded-2xl p-3 flex justify-center items-center hover:bg-green-600 transition-colors duration-200"
            >
              <img
                :src="iosLogo"
                class="h-auto brightness-0 invert w-[120px] sm:w-[150px]"
                alt="iOS Download"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
