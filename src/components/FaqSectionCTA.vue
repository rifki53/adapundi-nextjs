<template>
  <section class="relative bg-custom-green">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main Container -->
      <div class="flex flex-col md:flex-row">
        <!-- Left Content Side -->
        <div class="w-full md:w-1/2 py-6 my-6">
          <div class="max-w-xl text-center md:text-left">
            <h2
              class="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6"
            >
              Pertanyaan Umum Layanan Adapundi
            </h2>
            <p
              class="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8"
            >
              Klik tombol di bawah ini sekarang juga
            </p>

            <!-- Button -->
            <div class="mx-6 md:mx-0">
              <button
                @click="openPdfModal"
                class="btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <!-- Right Image Side -->
        <div class="hidden md:flex w-full md:w-1/2 justify-end items-center">
          <img
            src="@/images/punpun/Hello.png"
            alt="Icon punpun"
            class="h-[20rem] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- PDF Modal -->
    <ModalPdfView
      ref="pdfModalRef"
      pdf-file="/docs/common-ask.pdf"
      title="Pertanyaan Umum Layanan Adapundi"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ModalPdfView from "../components/ModalPdfView.vue";

const pdfModalRef = ref(null);

const openPdfModal = () => {
  pdfModalRef.value.openPdfModal();
};
</script>
