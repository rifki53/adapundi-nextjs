<script setup>
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import ModalVideo from '../components/ModalVideo.vue';

// --- Image Imports ---
import MobileBg from '@/images/banner/vertical/testimonial.png';
import DesktopBg from '@/images/illustration/abstract-illustration.svg';

// --- Responsive Logic ---
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 1024);
</script>

<template>
  <section
    class="relative bg-section flex flex-col justify-end lg:justify-center"
    :class="[isMobile ? 'h-screen' : 'bg-custom-green md:min-h-147']"
    :style="{
      backgroundImage: `url(${isMobile ? MobileBg : DesktopBg})`,
    }"
  >
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left pb-26 lg:pb-0"
    >
      <!-- Testimonial Content (Left) -->
      <div class="w-full lg:w-3/5 lg:pr-10">
        <h1
          class="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-montserrat leading-tight mb-6"
        >
          Aplikasi Adapundi
          <span class="font-bold">Limitnya Besar dan Pencairan Cepat</span>,
          Sehingga Bisa Mendukung Usaha Saya.
        </h1>

        <div
          class="text-white text-lg sm:text-xl font-normal font-montserrat mb-8"
        >
          CEVY, PENGUSAHA UMKM
        </div>

        <ModalVideo
          video="https://assets.adapundi.com/adapundi/media/0920+60sec-App-landscape.mp4"
          button-text="Kisah Selengkapnya"
        />
      </div>

      <!-- Image (Right) - Hidden on mobile, visible on desktop -->
      <div class="hidden lg:flex w-full lg:w-1/3 justify-center">
        <img
          class="w-full max-w-md object-cover"
          src="@/images/testimonial/CEVY-1.png"
          alt="Testimonial Icon"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-section {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 100%;
}
</style>
