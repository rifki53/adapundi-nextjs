<template>
  <section class="relative bg-gray-50">
    <div class="max-w-6xl mx-auto py-8 md:py-14 px-4 sm:px-6">
      <div class="flex flex-col justify-center items-center">
        <!-- Main Container -->
        <div class="bg-white rounded-[30px] overflow-hidden shadow-lg">
          <!-- Content Grid -->
          <div class="flex flex-col md:flex-row">
            <!-- Left Section: Title and Image (40%) -->
            <div
              class="w-full md:w-2/5 flex flex-col justify-between min-h-[500px]"
            >
              <!-- Tambahkan min-height dan justify-between -->
              <!-- Title -->
              <div class="p-6 md:p-10">
                <div class="text-gray-900 text-2xl md:text-4xl font-bold">
                  Kinerja Pendanaan
                </div>
              </div>
              <div class="hidden md:block mt-auto">
                <!-- Gunakan mt-auto untuk push ke bawah -->
                <img
                  class="w-full h-auto object-contain"
                  src="@/images/illustration/gadget-footer.png"
                  alt="Gadget Footer"
                  loading="lazy"
                />
              </div>
            </div>

            <!-- Right Section: Stats Grid (60%) -->
            <div class="w-full md:w-3/5 p-6 md:p-10">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <!-- Skeleton Loading -->
                <template v-if="isLoading">
                  <div
                    v-for="n in 6"
                    :key="n"
                    class="flex flex-col items-center p-4 gap-3"
                  >
                    <div
                      class="w-12 h-12 bg-custom-green rounded-full animate-pulse"
                    ></div>
                    <div
                      class="h-4 w-20 bg-gray-200 rounded animate-pulse"
                    ></div>
                    <div
                      class="h-6 w-16 bg-gray-200 rounded animate-pulse"
                    ></div>
                  </div>
                </template>

                <!-- Stats Items -->
                <template v-else>
                  <div
                    v-for="item in currentData"
                    :key="item.dataId"
                    class="flex flex-col items-center p-4 gap-3"
                  >
                    <div
                      class="w-12 h-12 flex items-center justify-center bg-custom-green rounded-full"
                    >
                      <i
                        :class="[
                          getIconClass(item.dataId),
                          'text-white text-xl',
                        ]"
                      ></i>
                    </div>
                    <div
                      class="text-center text-gray-900 text-xs md:text-sm font-medium"
                    >
                      {{ item.title }}
                    </div>
                    <div
                      class="text-center text-custom-green-dark text-base md:text-lg font-bold"
                    >
                      {{ item.value }}
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const currentData = ref([]);
const isLoading = ref(true);

const getIconClass = (dataId) => {
  switch (dataId) {
    case 1:
      return "pi pi-users";
    case 2:
      return "pi pi-user-plus";
    case 3:
      return "pi pi-user";
    case 4:
      return "pi pi-money-bill";
    case 5:
      return "pi pi-dollar";
    case 6:
      return "pi pi-calendar";
    default:
      return "pi pi-users";
  }
};

const getCurrentData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(
      "https://ap-api.adapundi.com/web-app/data"
    );
    currentData.value = response.data.data.slice(0, 6);
  } catch (error) {
    console.error("Error fetching getCurrentData:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getCurrentData();
});
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
