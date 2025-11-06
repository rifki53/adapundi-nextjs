<template>
  <!-- UPDATED: Wrapper diubah menggunakan flexbox untuk alignment -->
  <div :class="['flex justify-center lg:justify-start', marginClass]">
    <!-- 
      Jika prop 'external' adalah true, render sebagai tag <a> biasa.
      Ini cocok untuk link ke situs lain atau membuka file di tab baru.
    -->
    <a
      v-if="external"
      :href="to"
      target="_blank"
      rel="noopener noreferrer"
      :class="buttonClasses"
    >
      {{ title }}
    </a>

    <!-- 
      Jika 'external' adalah false (default), render sebagai <router-link>.
      Ini adalah cara yang benar untuk navigasi internal di dalam aplikasi Vue Anda.
    -->
    <router-link v-else :to="to" :class="buttonClasses">
      {{ title }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";

defineProps({
  // Teks yang akan ditampilkan di dalam tombol
  title: {
    type: String,
    required: true,
  },
  // Tujuan link (bisa berupa path internal seperti '/riplay' atau URL eksternal)
  to: {
    type: String,
    required: true,
  },
  // Kelas CSS untuk mengatur margin, dengan nilai default
  marginClass: {
    type: String,
    default: "", // UPDATED: Default diubah, karena alignment ditangani oleh wrapper
  },
  // Prop untuk menentukan apakah ini link eksternal atau internal
  external: {
    type: Boolean,
    default: false, // Default-nya adalah link internal
  },
});

// UPDATED: Kelas CSS untuk tombol dibuat responsif
const buttonClasses = computed(() => {
  return "btn bg-white text-gray-800 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors w-full lg:w-auto";
});
</script>