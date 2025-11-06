<template>
  <section class="relative">
    <!-- Bg -->
    <div class="absolute inset-0 bg-green-500 -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
      aria-hidden="true"
    >
      <img
        class="max-w-none"
        src="@/images/illustration/features-illustration.svg"
        width="2120"
        height="931"
        loading="lazy"
      />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 md:pb-16">
          <h2 class="font-bold text-5xl md:text-5xl text-white">
            Aktivitas Offline Adapundi
          </h2>
        </div>

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
                class="fill-green-500 group-hover:fill-green-300 transition duration-150 ease-in-out"
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
                class="fill-green-500 group-hover:fill-green-300 transition duration-150 ease-in-out"
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

          <!-- Grid -->
          <div
            class="max-w-sm mx-auto grid sm:grid-cols-2 sm:max-w-3xl lg:grid-cols-4 lg:max-w-none items-start"
          >
            <!-- #1 Kreativitas -->
            <div
              class="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
            >
              <i class="pi pi-palette mb-3 text-3xl text-white"></i>
              <h3 class="font-bold text-lg text-white">
                Kreativitas Tanpa Batas
              </h3>
              <div class="text-white text-opacity-80">
                Kami mendorong inovasi dan ide-ide segar untuk menciptakan
                solusi yang unik dan bernilai tambah bagi setiap projek.
              </div>
            </div>

            <!-- #2 Kolaborasi -->
            <div
              class="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i class="pi pi-users mb-3 text-3xl text-white"></i>
              <h3 class="font-bold text-lg text-white">Kolaborasi Tim</h3>
              <div class="text-white text-opacity-80">
                Bersama-sama kita lebih kuat. Kami percaya kerjasama tim yang
                solid adalah kunci kesuksesan setiap project.
              </div>
            </div>

            <!-- #3 Dampak -->
            <div
              class="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i class="pi pi-chart-line mb-3 text-3xl text-white"></i>
              <h3 class="font-bold text-lg text-white">Dampak Positif</h3>
              <div class="text-white text-opacity-80">
                Setiap langkah kami bertujuan menciptakan perubahan berarti dan
                memberikan manfaat nyata bagi semua pihak.
              </div>
            </div>

            <!-- #4 Pertumbuhan -->
            <div
              class="relative p-5 before:opacity-0 hover:before:opacity-20 before:absolute before:inset-0 before:rounded before:bg-gradient-to-tr before:from-white before:to-white/25 before:shadow-xl before:transition-all before:duration-150 before:ease-in-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="pi pi-arrow-up-right mb-3 text-3xl text-white"></i>
              <h3 class="font-bold text-lg text-white">Pertumbuhan Bersama</h3>
              <div class="text-white text-opacity-80">
                Kami berkomitmen untuk terus berkembang dan membangun kesuksesan
                bersama dalam setiap perjalanan.
              </div>
            </div>
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
import img17th1 from "@/images/event/17th-1.jpg";
import img17th2 from "@/images/event/17th-2.jpg";
import img17th3 from "@/images/event/17th-3.jpg";
import imgChristmas1 from "@/images/event/Christmas-1.jpg";
import imgChristmas2 from "@/images/event/Christmas-2.jpg";
import imgChristmas3 from "@/images/event/Christmas-3.jpg";
import imgOuting1 from "@/images/event/Outing1.jpg";
import imgOuting2 from "@/images/event/Outing2.jpg";
import imgOuting3 from "@/images/event/Outing3.jpg";
import imgOuting4 from "@/images/event/Outing4.jpg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      { id: 1, src: img17th1, alt: "17th Anniversary 1" },
      { id: 2, src: img17th2, alt: "17th Anniversary 2" },
      { id: 3, src: img17th3, alt: "17th Anniversary 3" },
      { id: 4, src: imgChristmas1, alt: "Christmas 1" },
      { id: 5, src: imgChristmas2, alt: "Christmas 2" },
      { id: 6, src: imgChristmas3, alt: "Christmas 3" },
      { id: 7, src: imgOuting1, alt: "Outing 1" },
      { id: 8, src: imgOuting2, alt: "Outing 2" },
      { id: 9, src: imgOuting3, alt: "Outing 3" },
      { id: 10, src: imgOuting4, alt: "Outing 4" },
    ]);

    const eventImage = ref([
      { id: 1, src: img17th1, alt: "17th event 1" },
      { id: 2, src: img17th2, alt: "17th event 2" },
      { id: 3, src: img17th3, alt: "17th event 3" },
    ]);

    return {
      modules: [Navigation],
      images,
    };
  },
};
</script>
