<script setup>
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { computed } from "vue";

const route = useRoute();

// Daftar path yang akan diblokir dari indexing
const noIndexRoutes = [
  "/invest",
  "/about-us",
  "/help",
  "/user-complaints",
  "/finance",
  "/trackback",
  "/feed",
  "/mail",
  "/user/login",
];

// Computed property untuk mengecek apakah rute saat ini harus diblokir
const shouldBlockIndexing = computed(() => {
  return noIndexRoutes.some((path) => route.path.startsWith(path));
});

// 1. Buat computed property yang secara reaktif menghasilkan array meta tag.
//    Jika tidak perlu diblokir, computed ini akan mengembalikan array kosong.
const metaTags = computed(() => {
  if (shouldBlockIndexing.value) {
    return [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ];
  }
  return []; // Kembalikan array kosong untuk menghapus tag jika tidak diperlukan
});

// 2. Panggil useHead HANYA SEKALI di level atas script setup.
//    Berikan computed property `metaTags` ke dalamnya.
//    @unhead/vue akan secara otomatis memantau perubahan pada `metaTags`
//    dan memperbarui <head> di HTML.
useHead({
  meta: metaTags,
});

// 3. Hapus fungsi applyMetaTags() dan watch(). Keduanya tidak lagi diperlukan.
</script>

<template>
  <!-- Komponen ini tidak merender apa pun, tugasnya hanya mengelola meta tag -->
</template>
