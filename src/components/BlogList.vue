<script setup>
import { onMounted, ref } from "vue";
import { useContent } from "@/composables/useContent";

const {
  posts,
  categories,
  loading,
  error,
  fetchPosts,
  fetchCategories,
  formatDate,
} = useContent();

const selectedCategory = ref("All");

const handleCategoryClick = (category) => {
  selectedCategory.value = category;
  fetchPosts(category);
};

onMounted(() => {
  fetchCategories();
  fetchPosts("All");
});
</script>

<template>
  <section class="relative">

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="mx-auto pt-10 pb-12 md:pb-20">
        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button
            v-for="category in categories"
            :key="category"
            @click="handleCategoryClick(category)"
            :class="[
              'btn-sm font-normal shadow-sm',
              selectedCategory === category
                ? 'text-gray-200 bg-gray-800 hover:bg-gray-900'
                : 'text-gray-800 bg-white hover:bg-gray-50',
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-8">
          <div class="text-gray-500">Loading posts...</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-8">
          <div class="text-red-500">Error: {{ error }}</div>
        </div>

        <!-- Articles -->
        <div v-else class="space-y-12">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="flex flex-col sm:flex-row items-start gap-6"
          >
            <!-- Image Preview -->
            <router-link
              v-if="post.image"
              class="block w-full sm:w-1/3 shrink-0"
              :to="`/blog/${post.slug}`"
            >
              <img
                :src="post.image"
                :alt="`Preview for ${post.title}`"
                class="w-full h-auto aspect-video object-cover rounded-md shadow-md hover:opacity-90 transition-opacity"
              />
            </router-link>

            <!-- Text Content -->
            <div class="w-full">
              <header class="mb-2">
                <div class="flex items-center gap-2 mb-2">
                  <div class="text-sm text-gray-500">
                    {{ post.author }} · {{ formatDate(post.date) }} ·
                    {{ post.readingTime }} min read
                  </div>
                </div>
                <h2 class="text-2xl font-bold">
                  <router-link
                    class="hover:underline"
                    :to="`/blog/${post.slug}`"
                  >
                    {{ post.title }}
                  </router-link>
                </h2>
              </header>

              <p class="text-gray-700 mb-4">
                {{ post.description }}
              </p>

              <div class="flex flex-wrap gap-1 mb-4">
                <span
                  class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                >
                  {{ post.category }}
                </span>
              </div>

              <footer>
                <router-link
                  class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  :to="`/blog/${post.slug}`"
                >
                  Read more
                  <span class="tracking-normal text-blue-300">-&gt;</span>
                </router-link>
              </footer>
            </div>
          </article>
        </div>

        <!-- No posts message -->
        <div
          v-if="!loading && !error && posts.length === 0"
          class="text-center py-8"
        >
          <div class="text-gray-500">No posts found in this category.</div>
        </div>

        <!-- Load more (placeholder) -->
        <div v-if="posts.length > 0" class="text-center mt-12">
          <button
            class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow-sm py-1.5 min-w-[220px]"
          >
            Load more <span class="tracking-normal text-gray-500 ml-2">↓</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
