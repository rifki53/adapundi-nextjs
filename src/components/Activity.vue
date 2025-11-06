<template>
  <section class="relative">
    <!-- Illustration -->

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div>
        <!-- Section header -->
        <!-- Carousel -->
        <div class="pb-12 md:pb-16">
          <!-- Slider -->
          <swiper
            :slides-per-view="'auto'"
            :space-between="24"
            :grab-cursor="true"
            :initial-slide="0"
            :watch-slides-progress="true"
            :modules="modules"
            :navigation="{
              nextEl: '.carousel-next',
              prevEl: '.carousel-prev',
            }"
            class="carousel max-w-sm mx-auto sm:max-w-none"
          >
            <SwiperSlide
              v-for="image in images"
              :key="image.id"
              class="max-w-[446px] h-auto"
            >
              <img
                class="w-full aspect-[4/3] object-cover h-full"
                :src="image.src"
                :alt="image.alt"
                width="446"
                height="335"
                loading="lazy"
              />
            </SwiperSlide>
          </swiper>

          <!-- Arrows -->
          <div class="flex mt-12 space-x-3 justify-end">
            <button
              class="carousel-prev relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="fill-green-900 group-hover:fill-green-800 transition duration-150 ease-in-out"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.914 5 3.5-3.5L6 .086 1.086 5H1v.086L.086 6 1 6.914V7h.086L6 11.914 7.414 10.5 3.914 7H13V5z"
                />
              </svg>
            </button>
            <button
              class="carousel-next relative z-20 w-11 h-11 rounded-full flex items-center justify-center group bg-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="fill-green-900 group-hover:fill-green-800 transition duration-150 ease-in-out"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9.086 5-3.5-3.5L7 .086 11.914 5H12v.086l.914.914-.914.914V7h-.086L7 11.914 5.586 10.5l3.5-3.5H0V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import acara17 from "@/images/event2/acara17.jpg";
import acara16 from "@/images/event2/acara16.jpg";
import labuanBajo from "@/images/event2/Labuan_Bajo_Cerdas_Pakai_Fintech_Politeknik_Elbajo_Labuan_Bajo_17_07_2023.jpg";
import bangkaBelitung1 from "@/images/event2/Bangka_Belitung_1.jpg";
import bangkaBelitung2 from "@/images/event2/Bangka_Belitung_Muda_Paham_Fintech_Politeknik_Belitung_08_06_2023.jpg";
import acara12 from "@/images/event2/acara12.png";
import acara11 from "@/images/event2/acara11.png";
import acara8 from "@/images/event2/acara8.png";
import acara7 from "@/images/event2/acara7.png";
import acara6 from "@/images/event2/acara6.png";
import acara5 from "@/images/event2/acara5.png";
import acara4 from "@/images/event2/acara4.jpg";
import acara3 from "@/images/event2/acara3.jpg";
import acara2 from "@/images/event2/acara2.png";
import acara1 from "@/images/event2/acara1.png";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      { id: 1, src: acara17, alt: "Acara 17" },
      { id: 2, src: acara16, alt: "Acara 16" },
      { id: 3, src: labuanBajo, alt: "Labuan Bajo Cerdas Pakai Fintech" },
      { id: 4, src: bangkaBelitung1, alt: "Bangka Belitung 1" },
      {
        id: 5,
        src: bangkaBelitung2,
        alt: "Bangka Belitung Muda Paham Fintech",
      },
      { id: 6, src: acara12, alt: "Acara 12" },
      { id: 7, src: acara11, alt: "Acara 11" },
      { id: 8, src: acara8, alt: "Acara 8" },
      { id: 9, src: acara7, alt: "Acara 7" },
      { id: 10, src: acara6, alt: "Acara 6" },
      { id: 11, src: acara5, alt: "Acara 5" },
      { id: 12, src: acara4, alt: "Acara 4" },
      { id: 13, src: acara3, alt: "Acara 3" },
      { id: 14, src: acara2, alt: "Acara 2" },
      { id: 15, src: acara1, alt: "Acara 1" },
    ]);

    return {
      modules: [Navigation],
      images,
    };
  },
};
</script>
