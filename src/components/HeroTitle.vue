<script setup>
import PageIllustration from "./PageIllustration.vue";

const props = defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <section class="relative">
    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="text-center">
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
          >
            {{ props.title }}
          </h1>
          <div v-if="props.description" class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700">{{ props.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
