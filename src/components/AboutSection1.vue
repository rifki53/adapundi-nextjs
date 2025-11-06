<script setup>
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

// --- Image Imports ---
import MobileBg from '@/images/banner/vertical/about.png';
import DesktopBg from '@/images/illustration/abstract-illustration.svg';

// --- Responsive Logic ---
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 768);
</script>

<template>
  <section
    class="relative bg-section flex flex-col justify-end md:justify-center"
    :class="[isMobile ? 'h-screen' : 'bg-custom-green md:min-h-147']"
    :style="{
      backgroundImage: `url(${isMobile ? MobileBg : DesktopBg})`,
    }"
  >
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col pb-12 md:flex-row md:gap-8 md:items-center pb-26 md:pb-0"
    >
      <!-- Image Section -->
      <div
        class="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2"
      >
        <div class="w-20 h-20 md:w-[60%] md:h-auto md:max-w-sm">
          <img
            class="w-full h-auto object-cover"
            src="@/images/logo/AP-logo.png"
            alt="Adapundi Services"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Content Section -->
      <div
        class="w-full md:w-3/5 flex flex-col gap-6 order-2 md:order-1 mt-12 md:mt-0"
      >
        <!-- Title -->
        <h1
          class="text-white text-3xl md:text-5xl font-bold leading-tight text-center md:text-left"
        >
          Tentang Adapundi
        </h1>

        <!-- Description -->
        <div class="flex-grow space-y-8">
          <div
            class="text-white text-xl font-normal space-y-4 text-center md:text-left"
          >
            <p>
              PT Info Tekno Siaga (Adapundi) adalah aplikasi pinjaman daring
              yang berizin OJK (KEP-48/D.05/2021) dan tergabung dalam Asosiasi
              Fintech Pendanaan Bersama Indonesia (AFPI).
            </p>
            <p>
              Adapundi berkomitmen untuk memberikan solusi keuangan yang mudah,
              cepat dan aman bagi seluruh masyarakat di Indonesia.
            </p>
          </div>
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
