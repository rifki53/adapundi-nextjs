<template>
  <div class="mt-3">
    <div class="flex flex-col md:flex-row">
      <!-- Android Section -->
      <div
        v-if="shouldShowAndroid"
        class="md:w-[29%] md:ml-3 mt-2 mb-2 md:mt-0 md:mb-0 md:pt-2 md:pb-2"
      >
        <a
          :href="androidOneLinkUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleLinkClick"
        >
          <div
            class="bg-white rounded-2xl hover:rounded-b-2xl hover:rounded-t-none py-3 px-6 flex flex-col justify-center items-center mr-2 transition-all relative md:w-full w-[12rem]"
            @mouseenter="isHoveredGooglePlay = true"
            @mouseleave="isHoveredGooglePlay = false"
          >
            <img
              class="w-full max-w-[150px]"
              :src="androidLogo"
              alt="Android Logo"
              loading="lazy"
            />

            <!-- Modal View on Hover -->
            <div
              v-if="isHoveredGooglePlay && !isAndroidDevice"
              class="hover-popup bg-white rounded-t-2xl pt-6 pl-6 pr-6 pb-3 z-20"
            >
              <img
                class="w-full max-w-[150px]"
                :src="gPQR"
                alt="QR Code"
                loading="lazy"
              />
            </div>
          </div>
        </a>
      </div>

      <!-- iOS Section -->
      <div
        v-if="shouldShowIOS"
        class="md:w-[29%] md:ml-3 mt-2 mb-2 md:mt-0 md:mb-0 md:pt-2 md:pb-2"
      >
        <a
          :href="iosOneLinkUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click="handleLinkClick"
        >
          <div
            class="bg-white rounded-2xl hover:rounded-b-2xl hover:rounded-t-none py-3 px-6 flex flex-col justify-center items-center mr-2 transition-all relative md:w-full w-[12rem]"
            @mouseenter="isHoveredIos = true"
            @mouseleave="isHoveredIos = false"
          >
            <!-- Normal View -->
            <div class="flex justify-center w-full">
              <img
                class="w-full max-w-[150px]"
                :src="iosLogo"
                alt="iOS Logo"
                loading="lazy"
              />
            </div>

            <!-- Modal View on Hover -->
            <div
              v-if="isHoveredIos && !isIOSDevice"
              class="hover-popup bg-white rounded-t-2xl pt-6 pl-6 pr-6 pb-3 z-20"
            >
              <img
                class="w-full max-w-[150px]"
                :src="iosQR"
                alt="QR Code"
                loading="lazy"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { isMobile, isIOS, isAndroid } from "@/utils/isMobile";
import androidLogo from "@/images/download/android-cta-logo.png";
import iosLogo from "@/images/download/ios-cta-logo.png";
import iosQR from "@/images/download/ios_qr_code.png";
import gPQR from "@/images/download/gp_qr_code.png";

// OneLink URLs
const androidOneLinkUrl = "https://adapundi.onelink.me/cN17/em5uj56b"; // media source: website_gp
const iosOneLinkUrl = "https://adapundi.onelink.me/cN17/szh8qiwc"; // media source: website_ios

// Reactive state
const isHoveredGooglePlay = ref(false);
const isHoveredIos = ref(false);
const isMobileDevice = ref(false);
const isAndroidDevice = ref(false);
const isIOSDevice = ref(false);
const windowWidth = ref(window?.innerWidth || 1024);

// Computed properties
const shouldShowAndroid = computed(() => {
  return !isMobileDevice.value || isAndroidDevice.value;
});

const shouldShowIOS = computed(() => {
  return !isMobileDevice.value || isIOSDevice.value;
});

// Methods
const handleLinkClick = () => {
  isHoveredIos.value = false;
  isHoveredGooglePlay.value = false;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  checkDevice();
};

const checkDevice = () => {
  try {
    const ua = navigator.userAgent.toLowerCase();
    isIOSDevice.value = isIOS(ua);
    isAndroidDevice.value = isAndroid(ua);
    isMobileDevice.value = isMobile({ ua });
  } catch (error) {
    console.error("Error in device detection:", error);
  }
};

// Initialize device detection
checkDevice();
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style>
.hover-popup {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  border-bottom: none;
  transform: translateY(1px); /* Ensures seamless connection with the button */
  display: flex;
  justify-content: center;
}

.hover-popup img {
  margin: 0 auto;
}

@media (hover: none) and (pointer: coarse) {
  .hover\:rounded-b-2xl:hover,
  .hover\:rounded-t-none:hover {
    border-radius: 1rem !important;
  }
}
</style>
