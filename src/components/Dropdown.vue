<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  title: String,
  mobile: { type: Boolean, default: false }, // Pass true for mobile version
});

const dropdownOpen = ref(false);
const dropdownRef = ref(null);

const closeDropdown = (e) => {
  if (!dropdownOpen.value) return;
  // Only close if clicking outside the dropdown
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <li
    ref="dropdownRef"
    class="relative flex items-center gap-0.5 px-3 py-1"
    v-if="!mobile"
    @mouseenter="dropdownOpen = true"
    @mouseleave="dropdownOpen = false"
    @focusin="dropdownOpen = true"
    @focusout="dropdownOpen = false"
  >
    <!-- Desktop trigger -->
    <span
      class="text-sm md:text-base text-gray-700 hover:text-gray-900 flex items-center cursor-pointer transition"
    >
      {{ title }}
    </span>
    <button
      class="shrink-0 p-1"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span class="sr-only">Show submenu for '{{ title }}'</span>
      <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
        <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
      </svg>
    </button>
    <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="origin-top-left absolute top-full left-0 w-40 bg-white p-2 rounded-xl shadow-lg shadow-black/[0.03] border border-gray-100"
      >
        <ul class="space-y-1">
          <slot />
        </ul>
      </div>
    </Transition>
  </li>

  <!-- MOBILE VERSION -->
  <li v-else class="relative flex flex-col px-3 py-1 w-full">
    <button
      class="flex justify-between items-center w-full text-sm text-gray-700 hover:text-gray-900 py-2"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span>{{ title }}</span>
      <svg class="fill-gray-400 ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
        <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
      </svg>
    </button>
    <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="w-full bg-white px-2 py-1 mt-1"
      >
        <ul class="space-y-1">
          <slot />
        </ul>
      </div>
    </Transition>
  </li>
</template>
