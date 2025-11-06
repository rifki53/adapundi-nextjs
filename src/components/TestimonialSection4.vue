<template>
  <section class="relative bg-custom-green">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main Container -->
      <div class="flex flex-col md:flex-row">
        <!-- Left Content Side -->
        <div class="w-full md:w-4xl py-6 my-6 text-center md:text-left">
          <div class="max-w-4xl">
            <h2
              class="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight mb-6"
            >
              Hidupkan Mimpi, <br />
              Jadi Inspirasi Bersama Adapundi
            </h2>
            <p
              class="text-base md:text-lg font-normal font-roboto text-white leading-relaxed mb-8"
            >
              Download aplikasi Adapundi sekarang!
            </p>

            <!-- Button -->
            <div class="flex gap-4 justify-center md:justify-start">
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="androidOneLinkUrl"
                class="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
              >
                <img
                  :src="androidLogo"
                  class="w-[150px] h-[29px]"
                  alt="Android Download"
                  loading="lazy"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="iosOneLinkUrl"
                class="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
              >
                <img
                  :src="iosLogo"
                  class="w-[150px] h-[29px]"
                  alt="iOS Download"
                  loading="lazy"
                />
              </a>
            </div>
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
import androidLogo from "@/images/download/android-cta-logo.png";
import iosLogo from "@/images/download/ios-cta-logo.png";

// OneLink URLs
const androidOneLinkUrl = "https://adapundi.onelink.me/cN17/em5uj56b"; // media source: website_gp
const iosOneLinkUrl = "https://adapundi.onelink.me/cN17/szh8qiwc"; // media source: website_ios
</script>
