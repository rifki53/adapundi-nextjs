<script setup>
import Afpi from "@/images/regulator/afpi.png";
import Laps from "@/images/regulator/laps.png";
import Ojk from "@/images/regulator/ojk.png";
import Komdigi from "@/images/regulator/komdigi.png";
import Iso from "@/images/regulator/iso.png";

const regulators = [
  {
    img: Ojk,
    alt: "OJK Regulator",
    title: "Berizin dan diawasi oleh",
  },
  {
    img: Afpi,
    alt: "AFPI Regulator",
    title: "Terdaftar dalam",
  },
  {
    img: Komdigi,
    alt: "Komdigi Regulator",
    title: "Terdaftar dalam",
  },
  {
    img: Iso,
    alt: "ISO Regulator",
    title: "Tersertifikasi dengan",
  },
  {
    img: Laps,
    alt: "LAPS Regulator",
    title: "Anggota dari",
  },
];
</script>

<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-8 sm:pt-12 md:pt-20 pb-8 sm:pb-12 md:pb-20">
        <!-- Title Section -->
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
            Berizin Resmi dan Tergabung
          </h2>
        </div>

        <!-- Grid Container -->
        <div
          class="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          <!-- 
            Card:
            - Mobile: Tinggi tetap (h-24), item berdampingan.
            - Desktop (sm+): Tinggi otomatis, item ditumpuk (flex-col), padding disesuaikan (py-6 px-4).
          -->
          <div
            v-for="(regulator, index) in regulators"
            :key="index"
            class="flex items-center justify-between p-4 bg-gray-200 rounded-lg h-24 sm:h-auto sm:flex-col sm:justify-center sm:text-center sm:py-6 sm:px-4"
          >
            <!-- 
              Title Text:
              - Urutan diubah menjadi pertama (order-1) di layar sm ke atas.
            -->
            <p
              class="text-sm font-medium text-gray-800 leading-tight sm:order-1"
            >
              {{ regulator.title }}
            </p>

            <!-- 
              Logo: 
              - Urutan diubah menjadi kedua (order-2) di layar sm ke atas.
              - Diberi margin atas (mt-4) untuk jarak dari judul.
            -->
            <img
              :src="regulator.img"
              :alt="regulator.alt"
              class="h-12 w-auto object-contain sm:order-2 sm:mt-4 sm:h-14"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
