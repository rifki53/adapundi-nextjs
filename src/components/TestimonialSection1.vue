<!-- https://assets.adapundi.com/adapundi/media/yuli.mp4
https://assets.adapundi.com/adapundi/media/punpun.mp4
https://assets.adapundi.com/adapundi/media/liza.mp4
https://assets.adapundi.com/adapundi/media/cevy.mp4
https://assets.adapundi.com/adapundi/media/bahrudin.mp4 -->

<script setup>
import ModalVideo from "../components/ModalVideo.vue";
</script>

<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      <!-- Section Header -->
      <div class="container px-4 mb-12 text-center">
        <h2
          class="text-3xl md:text-4xl font-bold font-montserrat text-[#1e1e1e] mb-4"
        >
          Apa Kata Mereka?
        </h2>
        <p
          class="text-lg md:text-xl font-normal font-inter text-black max-w-2xl mx-auto"
        >
          Dengarkan kisah inspiratif dan ulasan pengguna Adapundi.
        </p>
      </div>

      <!-- Testimonial 1 - Liza -->
      <div class="container mx-auto px-4 mb-16">
        <div class="flex flex-col md:flex-row items-stretch">
          <!-- Image Left - 40% width -->
          <div class="w-full md:w-2/5 mb-8 md:mb-0">
            <img
              src="@/images/testimonial/Liza.png"
              alt="Testimonial Image - Liza"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Content Right - 60% width -->
          <div
            class="w-full md:w-3/5 bg-custom-green3 p-8 md:p-12 flex flex-col justify-center"
          >
            <h3
              class="text-2xl md:text-3xl font-bold font-inter text-black text-center mb-6"
            >
              Liza - Driver Ojek Online
            </h3>
            <p
              class="text-sm md:text-base font-montserrat text-black text-center mb-8"
            >
              Adapundi jadi teman setia Liza dalam memenuhi kebutuhan, dengan
              menyediakan layanan yang praktis dan mudah untuk semua kalangan,
              membantu masyarakat yang membutuhkan dana tambahan.
            </p>
            <div class="flex justify-center mx-6 md:mx-0">
              <ModalVideo
                video="https://assets.adapundi.com/adapundi/media/liza.mp4"
                button-text="Kisah Selengkapnya"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 2 - Yuli (Reversed Layout) -->
      <div class="container mx-auto px-4 mb-16">
        <div class="flex flex-col md:flex-row-reverse items-stretch">
          <!-- Image Right (on desktop) - 40% width -->
          <div class="w-full md:w-2/5 mb-8 md:mb-0">
            <img
              src="@/images/testimonial/Yuli.png"
              alt="Testimonial Image - Yuli"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Content Left (on desktop) - 60% width -->
          <div
            class="w-full md:w-3/5 bg-custom-orange p-8 md:p-12 flex flex-col justify-center"
          >
            <h3
              class="text-2xl md:text-3xl font-bold font-inter text-black text-center mb-6"
            >
              Yuli - Pemilik Depot Air Minum
            </h3>
            <p
              class="text-sm md:text-base font-montserrat text-black text-center mb-8"
            >
              Keterbatasan modal sempat menghalangi Yuli untuk mengembangkan
              usaha depot airnya. Bersama Adapundi yang memberikan limit
              pinjaman tinggi, kini bisnisnya tumbuh pesat.
            </p>
            <div class="flex justify-center mx-6 md:mx-0">
              <ModalVideo
                video="https://assets.adapundi.com/adapundi/media/yuli.mp4"
                button-text="Kisah Selengkapnya"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial 3 - Bahrudin -->
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-stretch">
          <!-- Image Left - 40% width -->
          <div class="w-full md:w-2/5 mb-8 md:mb-0">
            <img
              src="@/images/testimonial/Bahrudin2.png"
              alt="Testimonial Image - Bahrudin"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- Content Right - 60% width -->
          <div
            class="w-full md:w-3/5 bg-custom-green3 p-8 md:p-12 flex flex-col justify-center"
          >
            <h3
              class="text-2xl md:text-3xl font-bold font-inter text-black text-center mb-6"
            >
              Bahrudin - Pengrajin Kayu
            </h3>
            <p
              class="text-sm md:text-base font-montserrat text-black text-center mb-8"
            >
              Berawal dari kebutuhan modal usaha, Bahrudin mencoba Adapundi.
              Sejak itu, ia tahu ke mana harus pergi saat membutuhkan dana
              darurat yang cepat, aman dan bisa diandalkan.
            </p>

            <div class="flex justify-center mx-6 md:mx-0">
              <ModalVideo
                video="https://assets.adapundi.com/adapundi/media/bahrudin.mp4"
                button-text="Kisah Selengkapnya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
