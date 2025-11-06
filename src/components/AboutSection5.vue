<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-12 text-center sm:text-left">
        Statistik Pendanaan
      </h2>

      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="hidden sm:block rounded-3xl border-2 border-white overflow-hidden row-span-2">
          <div class="flex items-center justify-center">
            <img
              src="@/images/punpun/Tips.png"
              alt="Statistics"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Loop semua data dari API -->
        <template v-for="item in stats" :key="item.dataId">
          <div class="rounded-3xl overflow-hidden shadow-lg">
            <div class="flex flex-col">
              <div class="bg-custom-green3 p-4 text-center">
                <div class="text-xl font-bold font-inter text-white">
                  {{ item.value }}
                </div>
              </div>
              <div class="p-4 h-full">
                <div class="px-2 text-center">
                  <p class="text-base text-gray-800 font-medium font-montserrat">
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://ap-api.adapundi.com/web-app/data')
    const json = await res.json()
    if (json.success && Array.isArray(json.data)) {
      stats.value = json.data
    }
  } catch (e) {
    console.error('Failed to fetch stats:', e)
  }
})
</script>
