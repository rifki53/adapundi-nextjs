<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto py-8 md:py-14 px-4 sm:px-6">
      <!-- Section header -->
      <div class="mx-auto text-center md:text-left pb-4 md:pb-8">
        <h2 class="text-3xl md:text-4xl font-bold">Tim Eksekutif</h2>
      </div>
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="member in team" :key="member.name">
          <div class="flex flex-col md:flex-row gap-8 md:items-center">
            <div class="w-full md:w-[35%]">
              <div
                class="aspect-square bg-gray-200 rounded-[1.5rem] overflow-hidden border-2 border-black mx-auto max-w-sm md:mx-0 md:max-w-none"
              >
                <img
                  :src="member.img"
                  :alt="member.alt"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="w-full md:w-[65%]">
              <div
                class="bg-gray-50 rounded-lg p-6 md:p-8 h-full text-center md:text-left"
              >
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {{ member.name }}
                </h3>
                <p class="text-lg text-gray-600 mb-6">
                  {{ member.position }}
                </p>
                <div class="text-gray-700 space-y-4">
                  <p>{{ member.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AchmadIndrawanImg from '@/images/directors/achmad-indrawan.png';
import MinervaAgustianiImg from '@/images/directors/minerva-agustiani.png';
import NovaNoviantiImg from '@/images/directors/nova-novianti.png';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

// Array of team members
const team = [
  {
    name: 'Achmad Indrawan',
    position: 'Direktur Utama PT Info Tekno Siaga',
    img: AchmadIndrawanImg,
    alt: 'Achmad Indrawan',
    description: `Berbekal pengalaman di industri keuangan lebih dari 10 tahun dan ketertarikannya pada fintech, mendorong Achmad Indrawan mendirikan Adapundi. Sebagai lulusan Magister Keuangan dan Perbankan dari Universitas Indonesia, beliau percaya teknologi bisa menjadi jawaban atas tantangan inklusi keuangan yang strategis dan berdampak di Indonesia.`,
  },
  {
    name: 'Minerva Agustiani',
    position: 'Direktur Operasional PT Info Tekno Siaga',
    img: MinervaAgustianiImg,
    alt: 'Minerva Agustiani',
    description: `Sebagai Direktur Operasional yang memegang peranan krusial untuk memberikan pelayanan dan pengalaman terbaik pelanggan Adapundi, Minerva Agustiani memimpin operasional perusahaan, agar berjalan sesuai regulasi. Sebagai lulusan terbaik Manajemen dari President University, beliau turut serta mengembangkan langkah strategis yang berorientasi pada pertumbuhan bisnis.`,
  },
  {
    name: 'Nova Novianti',
    position: 'Komisaris PT Info Tekno Siaga',
    img: NovaNoviantiImg,
    alt: 'Nova Novianti',
    description: `Nova Novianti memulai karier sebagai Senior Staff Akuntansi di PT Senayan Trikarya Sempana dan telah memiliki sertifikat keahlian Auditor ISO 9001:2008 dari International Register of Certified Auditors (IRCA) UK, yang menjadi komitmen terhadap kualitas produk dan sistem manajemen yang dijalankan Adapundi sesuai standarisasi yang berlaku di Indonesia.`,
  },
];
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #000;
}

.swiper-pagination-bullet {
  background: #000;
}

.swiper-pagination-bullet-active {
  background: #000;
}
</style>
