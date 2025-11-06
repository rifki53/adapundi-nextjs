<template>
  <section class="relative bg-white">
    <div class="w-full relative overflow-hidden">
      <!-- Video -->
      <video 
        ref="videoRef"
        class="w-full h-auto" 
        autoplay 
        loop 
        muted 
        playsinline
        @loadeddata="onVideoLoaded"
      >
        <source :src="videoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <!-- Top gradient overlay (white to transparent) -->
      <div class="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white via-white/50 to-transparent z-10"></div>
      
      <!-- Bottom gradient overlay (transparent to white) -->
      <div class="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "VideoPlayer",
  setup() {
    const videoRef = ref(null);
    const isLoaded = ref(false);
    const videoSrc = '/src/videos/punpun.mp4'; // Adjust this path according to your project structure

    const onVideoLoaded = () => {
      console.log('Video loaded');
      isLoaded.value = true;
    };

    return {
      videoSrc,
      isLoaded,
      onVideoLoaded,
      videoRef
    };
  }
};
</script>
