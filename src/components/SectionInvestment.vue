<script setup>
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import BaseButton from './BaseButton.vue';

// Import both images
import MobileHero from '@/images/banner/vertical/investment.png';
import DesktopHero from '@/images/illustration/abstract-illustration.svg';

// Get screen width and create a computed property for mobile
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 768); // Tailwind's `md` breakpoint
</script>

<template>
  <section
    class="relative bg-custom-green bg-section flex flex-col justify-end md:justify-center"
    :class="[isMobile ? 'h-screen' : 'md:min-h-147']"
    :style="{
      backgroundImage: `url(${isMobile ? MobileHero : DesktopHero})`,
    }"
  >
    <div
      class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:items-start text-center md:text-left pb-26 md:pb-0"
    >
      <div class="w-full md:max-w-3xl md:pt-12">
        <!-- Heading -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
          Dapatkan Akses Pendanaan dengan Imbal Hasil Menguntungkan
        </h1>

        <!-- Subheading -->
        <p class="text-lg md:text-xl text-white font-medium md:mb-12 mb-4">
          Proses akuntabel, terukur, dengan potensi imbal hasil yang
          menjanjikan.
        </p>

        <!-- CTA Button -->
        <div class="md:mb-12 mb-4">
          <BaseButton
            title="HUBUNGI KAMI"
            to="mailto:bd@adapundi.com"
            :external="true"
          />
        </div>

        <!-- Footer Text -->
        <p class="text-white text-sm font-normal">
          Adapundi berizin dan diawasi OJK,
          <br class="md:hidden" />
          serta resmi tergabung di AFPI
        </p>
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
}
</style>
