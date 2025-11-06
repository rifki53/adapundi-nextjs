<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Dropdown from "./Dropdown.vue";

// Props from parent
const props = defineProps({
  aboutLinks: {
    type: Array,
    required: true,
  },
  serviceLinks: {
    type: Array,
    required: true,
  },
  fundingLinks: {
    type: Array,
    required: true,
  },
  tkbData: {
    type: Object,
    default: () => ({}),
  },
});

const mobileNavOpen = ref(false);
const mobileNav = ref(null);
const hamburger = ref(null);

const clickOutside = (e) => {
  if (
    !mobileNavOpen.value ||
    mobileNav.value.contains(e.target) ||
    hamburger.value.contains(e.target)
  )
    return;
  mobileNavOpen.value = false;
};

const keyPress = ({ keyCode }) => {
  if (!mobileNavOpen.value || keyCode !== 27) return;
  mobileNavOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", clickOutside);
  document.addEventListener("keydown", keyPress);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", clickOutside);
  document.removeEventListener("keydown", keyPress);
});
</script>

<template>
  <div class="flex">
    <!-- Hamburger button with smooth transition between burger and X icon -->
    <button
      class="group inline-flex w-10 h-10 text-gray-800 bg-white text-center items-center justify-center transition-all duration-300 ease-in-out rounded-md"
      ref="hamburger"
      :class="{ active: mobileNavOpen }"
      aria-controls="mobile-nav"
      :aria-expanded="mobileNavOpen"
      @click="mobileNavOpen = !mobileNavOpen"
    >
      <span class="sr-only">Menu</span>
      
      <!-- Burger/X icon with smooth transition -->
      <div class="w-6 h-6 relative flex items-center justify-center">
        <!-- Top bar -->
        <span 
          class="absolute h-0.5 w-6 bg-gray-800 rounded-sm transform transition-all duration-300 ease-in-out"
          :class="mobileNavOpen ? 'rotate-45' : '-translate-y-2'"
        ></span>
        
        <!-- Middle bar (only visible when closed) -->
        <span 
          class="absolute h-0.5 w-6 bg-gray-800 rounded-sm transform transition-all duration-300 ease-in-out"
          :class="mobileNavOpen ? 'opacity-0' : 'opacity-100'"
        ></span>
        
        <!-- Bottom bar -->
        <span 
          class="absolute h-0.5 w-6 bg-gray-800 rounded-sm transform transition-all duration-300 ease-in-out"
          :class="mobileNavOpen ? '-rotate-45' : 'translate-y-2'"
        ></span>
      </div>
    </button>

    <!-- Mobile navigation with smooth transition -->
    <Transition
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <nav
        id="mobile-nav"
        ref="mobileNav"
        v-show="mobileNavOpen"
        class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] mt-2 mx-2 before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
      >
        <ul class="p-4">
          <Dropdown
            title="Layanan"
            mobile
            class="text-sm whitespace-nowrap mb-3"
          >
            <ul class="min-w-[200px] py-2">
              <li v-for="link in props.fundingLinks" :key="link.path">
                <router-link
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap transition-colors duration-200"
                  :to="link.path"
                  @click="mobileNavOpen = false"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>
          </Dropdown>

          <li
            v-for="link in props.aboutLinks"
            :key="link.path"
            class="px-3 py-2 mb-3"
          >
            <router-link
              class="text-sm text-gray-700 hover:text-gray-900 flex items-center transition-colors duration-200 whitespace-nowrap"
              :to="link.path"
              @click="mobileNavOpen = false"
              >{{ link.title }}</router-link
            >
          </li>

          <Dropdown
            title="Bantuan"
            mobile
            class="text-sm whitespace-nowrap mb-3"
          >
            <ul class="min-w-[200px] py-2">
              <li v-for="link in props.serviceLinks" :key="link.path">
                <router-link
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap transition-colors duration-200"
                  :to="link.path"
                  @click="mobileNavOpen = false"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>
          </Dropdown>

          <Dropdown
            :title="`TKB90=${props.tkbData.tkb90 || ''}`"
            mobile
            class="text-sm whitespace-nowrap"
          >
            <ul class="min-w-[200px] py-2">
              <!-- Dynamically render TKB data -->
              <li v-if="props.tkbData.tkb0">
                <span
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap"
                >
                  TKB0 = {{ props.tkbData.tkb0 }}
                </span>
              </li>
              <li v-if="props.tkbData.tkb30">
                <span
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap"
                >
                  TKB30 = {{ props.tkbData.tkb30 }}
                </span>
              </li>
              <li v-if="props.tkbData.tkb60">
                <span
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap"
                >
                  TKB60 = {{ props.tkbData.tkb60 }}
                </span>
              </li>
              <li v-if="props.tkbData.tkb90">
                <span
                  class="text-sm text-gray-700 hover:bg-gray-100 flex py-2 px-3 rounded-lg whitespace-nowrap"
                >
                  TKB90 = {{ props.tkbData.tkb90 }}
                </span>
              </li>
            </ul>
          </Dropdown>
        </ul>
      </nav>
    </Transition>
  </div>
</template>
