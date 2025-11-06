<script setup>
import Header from "~/components/Header.vue";
import NotFoundSection from "~/components/NotFoundSection.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip bg-white"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <NotFoundSection />
    </main>
  </div>
</template>
