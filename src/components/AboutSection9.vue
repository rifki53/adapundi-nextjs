<template>
  <section class="bg-white">
    <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <!-- Title -->
      <h2
        class="font-montserrat mb-8 text-center text-2xl font-bold text-gray-900 sm:text-left sm:text-3xl md:text-4xl"
      >
        Publikasi Pengaduan Konsumen PT Info Tekno Siaga
      </h2>

      <!-- Links Container -->
      <div class="bg-white">
        <!-- Green Header -->
        <div class="bg-custom-green3 px-6 py-3">
          <span class="font-inter text-sm font-medium"> Lihat Lampiran </span>
        </div>
        <div class="flex flex-col">
          <!-- Loop melalui data publikasi -->
          <template v-for="item in publications" :key="item.year">
            <ImageModal
              :img-src="item.imageSrc"
              :alt-text="`Publikasi Pengaduan Konsumen ${item.year}`"
              :modal-title="`Publikasi Pengaduan Konsumen PT Info Tekno Siaga ${item.year}`"
            >
              <template #trigger>
                <div
                  class="flex cursor-pointer items-center gap-2.5 border-b border-gray-200 px-6 py-3 text-gray-500 transition-colors duration-200 hover:bg-[#e2e7f0] hover:text-gray-900"
                >
                  <i class="pi pi-image text-base mr-2"></i>
                  <!-- Opsional: Menambahkan ikon gambar -->
                  <span class="font-inter text-sm font-medium">
                    Publikasi Pengaduan Konsumen PT Info Tekno Siaga
                    {{ item.year }}
                  </span>
                </div>
              </template>
            </ImageModal>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ImageModal from "../components/ImageModal.vue"; // Pastikan path ini benar
import Pub2024 from "@/images/publication/2024.jpg";

const publications = [
  {
    year: 2024,
    imageSrc: Pub2024,
  },
];
</script>
