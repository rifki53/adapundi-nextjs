<script setup>
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import BaseButton from './BaseButton.vue';

// --- Image Imports ---
import MobileHero from '@/images/banner/vertical/riplay.png';
import DesktopHero from '@/images/illustration/abstract-illustration.svg';

// --- Responsive Logic ---
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 768);
</script>

<template>
  <section
    class="relative bg-section flex flex-col justify-end md:justify-center"
    :class="[isMobile ? 'h-screen' : 'bg-custom-green min-h-147']"
    :style="{
      backgroundImage: `url(${isMobile ? MobileHero : DesktopHero})`,
    }"
  >
    <div class="max-w-6xl mx-auto w-full px-4 sm:px-6 pb-26 md:pb-0">
      <div
        class="flex flex-col items-center text-center md:items-start md:text-left md:max-w-4xl"
      >
        <!-- Heading -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
          Ringkasan Informasi Produk dan Layanan (RIPLAY)
        </h1>

        <!-- Subheading -->
        <p class="text-lg md:text-xl text-white font-medium mb-12">
          Adapundi adalah aplikasi pinjaman daring yang sudah berizin dan
          diawasi OJK.
        </p>

        <!-- CTA Button -->
        <div class="w-full">
          <BaseButton
            to="/docs/riplay.pdf"
            title="DOWNLOAD RIPLAY"
            :external="true"
          />
        </div>
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
