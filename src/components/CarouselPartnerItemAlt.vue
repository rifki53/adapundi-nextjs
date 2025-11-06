<!-- CarouselPartnerItem.vue -->
<template>
  <div class="relative flex items-center justify-center bg-white rounded-2xl p-2">
    <img
      :data-src="testimonial.img"
      :alt="testimonial.alt"
      class="w-full h-full max-h-12 md:max-h-14 hover:opacity-100 transition-opacity duration-300 lazy object-contain"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  // Initialize lazy loading
  const lazyImages = document.querySelectorAll('img.lazy');
  
  const lazyLoadImages = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  };

  const imageObserver = new IntersectionObserver(lazyLoadImages, {
    root: null,
    threshold: 0,
    rootMargin: '50px',
  });

  lazyImages.forEach(img => imageObserver.observe(img));
});
</script>