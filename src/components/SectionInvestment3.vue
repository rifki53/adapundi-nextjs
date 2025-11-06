<script setup>
import BaseButton from "./BaseButton.vue";
</script>

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
              Siap Menjadi Partner Pendanaan?
            </h2>
            <p
              class="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8"
            >
              Hubungi tim kami untuk informasi lebih lanjut
            </p>

            <!-- Button -->

            <BaseButton
              title="Hubungi Sekarang"
              to="mailto:bd@adapundi.com"
              :external="true"
              marginClass=""
            />
          </div>
        </div>

        <!-- Right Image Side - Hidden on mobile, visible on md and up -->
        <div class="hidden md:block w-full md:w-1/2 justify-items-end">
          <img
            src="@/images/punpun/Hello.png"
            alt="Icon punpun"
            class="h-[20rem] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
