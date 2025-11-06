<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import { useWindowSize } from "@vueuse/core";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// --- Impor Gambar Manual ---
// Desktop
import bgImage01Desktop from "@/images/bgslide/horizontal/h1.png";
import bgImage02Desktop from "@/images/bgslide/horizontal/h2.png";
import bgImage03Desktop from "@/images/bgslide/horizontal/h3.png";
import bgImage04Desktop from "@/images/bgslide/horizontal/h4.png";
// Mobile
import bgImage01Mobile from "@/images/bgslide/vertical/v1.png";
import bgImage02Mobile from "@/images/bgslide/vertical/v2.png";
import bgImage03Mobile from "@/images/bgslide/vertical/v3.png";
import bgImage04Mobile from "@/images/bgslide/vertical/v4.png";
// Logo Tombol
import androidLogo from "@/images/download/android-cta-logo.png";
import iosLogo from "@/images/download/ios-cta-logo.png";
import androidQR from "@/images/download/gp_qr_code.png";
import iosQR from "@/images/download/ios_qr_code.png";

// --- Komposabel & State ---
const { width: screenWidth } = useWindowSize();
const isMobileOrTablet = computed(() => screenWidth.value < 1024);
const hoveredPlatform = ref(null);

// --- Data ---
const modules = [Pagination, Autoplay];

const slides = [
  {
    title: "7 Tahun Melayani\nPilihan Jutaan Pengguna",
    description:
      "Hidupkan setiap mimpi dengan hati. Nikmati pinjaman limit tinggi bunga rendah, sekarang juga!",
    desktop: bgImage01Desktop,
    mobile: bgImage01Mobile,
    link: null,
  },
  {
    title: "Proses Cepat, \nAtur Sesuai Kebutuhan",
    description:
      "Dapatkan pinjaman cepat cair hanya dengan KTP dan nomor HP, pengajuan cepat dalam hitungan menit.",
    desktop: bgImage02Desktop,
    mobile: bgImage02Mobile,
    link: null,
  },
  {
    title: "Layanan Andalan \nKebutuhan Keuangan",
    description:
      "Dari kebutuhan mendesak hingga usaha, pinjaman daring 24 jam Adapundi hadir memberikan solusi keuangan yang aman",
    desktop: bgImage03Desktop,
    mobile: bgImage03Mobile,
    link: null,
  },
  {
    title: "Keamanan Data Anda \nKomitmen Utama Kami",
    description:
      "Adapundi adalah pinjaman daring legal dengan sertifikasi perlindungan manajemen keamanan informasi ISO/IEC 27001:2022",
    desktop: bgImage04Desktop,
    mobile: bgImage04Mobile,
    link: null,
  },
];

const downloadButtons = [
  {
    platform: "Android",
    href: "https://adapundi.onelink.me/cN17/em5uj56b",
    logo: androidLogo,
    qrCode: androidQR,
  },
  {
    platform: "iOS",
    href: "https://adapundi.onelink.me/cN17/szh8qiwc",
    logo: iosLogo,
    qrCode: iosQR,
  },
];
</script>

<template>
  <section class="relative">
    <Swiper
      class="h-full w-screen lg:w-full"
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <component
          :is="slide.link ? 'a' : 'div'"
          :href="slide.link"
          :target="slide.link ? '_blank' : null"
          :rel="slide.link ? 'nofollow noopener noreferrer' : null"
          class="pt-20 md:pt-120 lg:pt-0 bg-cover bg-center md:bg-top lg:bg-center bg-no-repeat w-full flex flex-col justify-end items-center lg:items-start px-6 lg:px-20"
          :style="{
            backgroundImage: `url(${
              isMobileOrTablet ? slide.mobile : slide.desktop
            })`,
          }"
        >
          <div
            class="max-w-6xl mx-auto px-4 sm:px-6 z-10 min-h-147 w-full flex flex-col justify-end lg:justify-center"
          >
            <div
              class="pb-10 lg:pb-0 w-full lg:w-1/2 lg:mb-18 pr-2 lg:pt-40 text-center lg:text-left text-gray-900"
            >
              <!-- Conditional Heading: h1 for the first slide, h2 for others -->
              <h1
                v-if="index === 0"
                class="h2 font-extrabold text-gray-900 mb-4 whitespace-pre-line"
              >
                {{ slide.title }}
              </h1>
              <h2
                v-else
                class="h2 font-extrabold text-gray-900 mb-4 whitespace-pre-line"
              >
                {{ slide.title }}
              </h2>

              <div class="flex flex-col">
                <p
                  class="p text-gray-900 w-full whitespace-pre-line"
                  v-html="slide.description"
                />
                <div class="flex gap-4 justify-center lg:justify-start mt-6">
                  <a
                    v-for="button in downloadButtons"
                    :key="button.platform"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    :href="button.href"
                    class="bg-custom-green rounded-xl p-2 flex justify-center items-center transition-all duration-200 hover:bg-green-600 relative hover:rounded-b-xl hover:rounded-t-none"
                    @mouseenter="hoveredPlatform = button.platform"
                    @mouseleave="hoveredPlatform = null"
                    @click.stop
                  >
                    <img
                      :src="button.logo"
                      class="h-[25px] lg:h-[29px] w-auto brightness-0 invert"
                      :alt="`${button.platform} Download`"
                      loading="lazy"
                    />
                    <div
                      v-if="
                        hoveredPlatform === button.platform && !isMobileOrTablet
                      "
                      class="hover-popup bg-white rounded-t-xl pt-4 pb-2 px-4 z-20"
                    >
                      <img
                        :src="button.qrCode"
                        class="w-full max-w-[120px]"
                        alt="QR Code"
                        loading="lazy"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <p class="p text-gray-900 mt-4 h-8">
                Adapundi berizin dan diawasi OJK, serta resmi tergabung di AFPI
              </p>
            </div>
          </div>
        </component>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background-color: #ffffff;
}

.hover-popup {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  border-bottom: none;
  transform: translateY(1px);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (hover: none) and (pointer: coarse) {
  .hover\:rounded-b-xl:hover,
  .hover\:rounded-t-none:hover {
    border-radius: 0.75rem !important;
  }
}
</style>
