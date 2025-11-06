<script setup>
import { ref, onMounted } from "vue";
import { useContent } from "@/composables/useContent";
import { isMobile } from "@/utils/isMobile";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const { posts, loading, fetchPosts } = useContent();
const modules = ref([Navigation]);
const isMobileDevice = ref(false);

onMounted(() => {
  fetchPosts("CSR");
  isMobileDevice.value = isMobile();
});
</script>

<template>
  <section v-if="!loading && posts.length > 0" class="relative bg-yellow-400">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div class="flex items-center md:gap-4">
        <!-- Tombol Navigasi Kiri -->
        <button class="swiper-button-prev-custom hidden md:block text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <swiper
          :modules="modules"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          :slides-per-view="1"
          :space-between="50"
          :loop="true"
          class="w-full"
        >
          <swiper-slide v-for="post in posts" :key="post.slug">
            <!-- Blok ini TIDAK diubah, sesuai permintaan Anda -->
            <div
              class="flex justify-center gap-8 md:gap-16 md:flex-row"
              :class="{
                'flex-col': isMobileDevice,
              }"
            >
              <!-- Gambar di Kiri -->
              <router-link
                v-if="post.image"
                class="block w-full md:w-1/2 shrink-0"
                :to="`/blog/${post.slug}`"
              >
                <img
                  :src="post.image"
                  :alt="`Cover for ${post.title}`"
                  class="w-full h-full aspect-video object-cover rounded-lg"
                />
              </router-link>

              <div
                class="w-full md:w-1/2 flex flex-col text-center md:text-left md:justify-between md:self-stretch"
              >
                <!-- Wrapper untuk Judul dan Navigasi Mobile -->
                <div class="flex items-center justify-center gap-4 md:block">
                  <!-- Tombol Prev Mobile -->
                  <button
                    class="swiper-button-prev-custom text-gray-900 md:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <!-- Judul -->
                  <router-link :to="`/blog/${post.slug}`">
                    <h2
                      class="md:h-60 h-auto flex justify-center md:justify-start text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 md:pb-4 leading-tight hover:underline"
                    >
                      {{
                        post.title.length > 80
                          ? post.title.substring(0, 80) + "..."
                          : post.title
                      }}
                    </h2>
                  </router-link>

                  <!-- Tombol Next Mobile -->
                  <button
                    class="swiper-button-next-custom text-gray-900 md:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <!-- Wrapper konten bawah (CSR & Link) -->
                <div class="pt-4">
                  <div class="text-gray-800 font-semibold">
                    #{{ post.category.toUpperCase() }}
                  </div>
                  <router-link
                    :to="`/blog/${post.slug}`"
                    class="font-bold text-gray-900 tracking-wider hover:underline"
                  >
                    BACA SEKARANG
                  </router-link>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Tombol Navigasi Kanan -->
        <button class="swiper-button-next-custom hidden md:block text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Fallbacks -->
  <div
    v-else-if="!loading && posts.length === 0"
    class="text-center py-16 bg-gray-50"
  >
    <p class="text-gray-500">
      Tidak ada artikel dalam kategori '{{ props.category }}'.
    </p>
  </div>
</template>

<style scoped>
/* Style tidak perlu diubah */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  cursor: pointer;
  transition: opacity 0.3s;
}
.swiper-button-disabled {
  opacity: 0.3;
  cursor: auto;
}
</style>
