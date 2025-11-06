<script setup>
const props = defineProps(['testimonial']);
import ModalVideoAlternative from '../components/ModalVideoAlternative.vue';
</script>

<template>
  <article
    class="relative flex flex-col rounded-2xl h-[30rem] p-5 shadow-lg bg-white"
  >
    <header class="flex items-center gap-3 mb-4">
      <img
        class="shrink-0 rounded-full"
        :src="props.testimonial.img"
        width="44"
        height="44"
        :alt="props.testimonial.name"
      />
      <div>
        <div class="font-bold">{{ props.testimonial.name }}</div>
      </div>
    </header>

    <div v-if="props.testimonial.videoThumb" class="grow">
      <p class="mb-4">
        <slot />
      </p>

      <!-- 
        Wrapper div to center the video thumbnail on mobile 
        and align it to the start (left) on desktop.
      -->
      <div class="flex justify-center md:justify-start">
        <ModalVideoAlternative
          :thumb="props.testimonial.videoThumb"
          :thumbWidth="312"
          :thumbHeight="180"
          thumbAlt="Modal video thumbnail"
          :video="props.testimonial.videoUrl"
          :videoWidth="1920"
          :videoHeight="1080"
        />
      </div>
    </div>

    <div v-else class="grow text-sm text-gray-700">
      <slot />
    </div>
    <footer class="mt-4 text-gray-700 flex items-center gap-2.5">
      <div class="text-xs">{{ props.testimonial.date }}</div>
    </footer>
  </article>
</template>
