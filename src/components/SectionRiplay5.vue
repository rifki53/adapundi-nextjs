<template>
  <section class="relative bg-custom-green">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main Container -->
      <div class="flex flex-col md:flex-row">
        <!-- Left Content Side -->
        <div class="w-full md:w-1/2 py-6 my-6 text-center md:text-left">
          <div class="max-w-xl mx-auto md:mx-0">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Download RIPLAY
            </h2>
            <p
              class="text-base md:text-lg font-normal font-roboto text-white mb-8"
            >
              Download pdf untuk info selengkapnya.
            </p>

            <BaseButton
              to="/docs/riplay.pdf"
              title="DOWNLOAD RIPLAY"
              :external="true"
              marginClass=""
            />
          </div>
        </div>

        <!-- Right Image Side -->
        <div class="hidden md:flex w-full md:w-1/2 justify-end items-end">
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

<script setup>
import BaseButton from "./BaseButton.vue";
</script>
