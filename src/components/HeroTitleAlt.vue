<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

// Import both the mobile and desktop images
import MobileBg from "@/images/banner/vertical/about.png";
import DesktopHero from "@/images/illustration/abstract-illustration.svg";

const props = defineProps({
  title: String,
  description: String,
  isBlog: Boolean, // Accept the isBlog prop
});

// Create a computed property to check if the screen is mobile
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 768); // Tailwind's `md` breakpoint
</script>

<template>
  <section
    class="relative bg-custom-green bg-section flex flex-col md:justify-center"
    :class="[
      isBlog ? 'h-90' : isMobile ? 'h-screen' : 'md:min-h-147',
      // For the mobile blog view, add top padding to the section itself
      // to push the content down from the header. I've increased it to pt-32.
      isBlog && isMobile ? 'pt-32' : '',
      // For other mobile views, align content to the bottom.
      // On desktop, 'md:justify-center' will override this.
      !isBlog ? 'justify-end' : ''
    ]"
    :style="{
      backgroundImage: `url(${isMobile ? MobileBg : DesktopHero})`,
    }"
  >
    <div
      class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:p-8 flex flex-col items-center md:items-start text-center md:text-left"
      :class="{
        // For non-blog mobile views, add padding at the bottom.
        'pb-26': !isBlog
      }"
    >
      <div
        class="w-full md:max-w-3xl"
        :class="{ 'pt-12': isBlog }"
      >
        <!-- Heading -->
        <h1
          class="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight max-w-4xl mb-6"
          v-html="props.title"
        ></h1>

        <!-- Subheading -->
        <p
          v-if="props.description"
          class="text-lg md:text-xl text-white font-medium leading-relaxed max-w-3xl mb-12"
        >
          {{ props.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-section {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 100%;
}
</style>
