<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Axios from "axios";
import Dropdown from "./Dropdown.vue";

const mobileNavOpen = ref(false);
const mobileNav = ref(null);
const hamburger = ref(null);
const tkbData = ref({});

// Define navigation links
const aboutLinks = [
  { path: "/about", title: "Tentang Adapundi" },
  { path: "/testimonial", title: "Kisah Inspiratif" },
];

const serviceLinks = [
  { path: "/riplay", title: "RIPLAY" },
  { path: "/antifraud", title: "Antifraud" },
  { path: "/faq", title: "FAQ" },
  { path: "/term-condition", title: "Syarat & Ketentuan" },
];

const fundingLinks = [
  { path: "/loans", title: "Pinjaman" },
  { path: "/investment", title: "Pendanaan" },
];

const allLink = [
  { path: "/loans", title: "Pinjaman" },
  { path: "/investment", title: "Pendanaan" },
  { path: "/about", title: "Tentang Adapundi" },
  { path: "/testimonial", title: "Kisah Inspiratif" },
  { path: "/riplay", title: "RIPLAY" },
  { path: "/antifraud", title: "Antifraud" },
  { path: "/faq", title: "FAQ" },
  { path: "/term-condition", title: "Syarat & Ketentuan" },
];

// Mobile navigation links (all links combined)
// const mobileNavLinks = [
//   { path: "/loans", title: "Pinjaman" },
//   { path: "/investment", title: "Pendanaan" },
//   { path: "/about", title: "Tentang Adapundi" },
//   { path: "/testimonial", title: "Kisah Inspiratif" },
//   { path: "/riplay", title: "RIPLAY" },
//   { path: "/antifraud", title: "Antifraud" },
//   { path: "/faq", title: "FAQ" },
//   { path: "/term-condition", title: "Syarat & Ketentuan" },
// ];

// Rest of your existing setup code...
const fetchTKBData = () => {
  Axios.get("https://ap-api.adapundi.com/compliance/tkbdata")
    .then((response) => {
      tkbData.value = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching TKB data:", error);
    });
};

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
  fetchTKBData();
  document.addEventListener("click", clickOutside);
  document.addEventListener("keydown", keyPress);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", clickOutside);
  document.removeEventListener("keydown", keyPress);
});
</script>

<template>
  <header class="fixed top-2 md:top-6 w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative flex items-center justify-between gap-3 h-16 rounded-2xl px-3 backdrop-blur-sm bg-white/100 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
      >
        <!-- Site branding -->
        <div class="flex-1 flex items-center">
          <!-- Logo -->
          <router-link
            class="inline-flex md:px-3"
            to="/"
            aria-label="kodespoon"
          >
            <img
              src="@/images/logo/logo_new.png"
              alt="Adapundi"
              class="object-cover w-[60%] md:w-full"
            />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul
            class="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8"
          >
            <ul class="dropdown-menu">
              <li
                v-for="link in fundingLinks"
                :key="link.path"
                class="px-3 py-1"
              >
                <router-link
                  class="text-gray-700 hover:text-gray-900 flex flex-col items-center transition"
                  :to="link.path"
                  >{{ link.title }}</router-link
                >
              </li>
            </ul>

            <li v-for="link in allLink" :key="link.path" class="px-3 py-1">
              <router-link
                class="text-gray-700 hover:text-gray-900 flex items-center transition"
                :to="link.path"
                >{{ link.title }}</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- Desktop sign in links -->
        <ul
          class="flex-1 flex justify-end items-center gap-3 hidden md:flex md:grow"
        >
          <li>
            <ul>
              <Dropdown :title="`TKB90=${tkbData.tkb90 || ''}`">
                <ul class="dropdown-menu">
                  <li v-if="tkbData.tkb0">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB0 = {{ tkbData.tkb0 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb30">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB30 = {{ tkbData.tkb30 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb60">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB60 = {{ tkbData.tkb60 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb90">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB90 = {{ tkbData.tkb90 }}
                    </span>
                  </li>
                </ul>
              </Dropdown>
            </ul>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="flex md:hidden">
          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="fill-current pointer-events-none"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Top bar -->
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="3"
                width="16"
                height="2"
                rx="1"
                :class="mobileNavOpen ? 'rotate-45 translate-y-[5px]' : ''"
              ></rect>

              <!-- Middle bar -->
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="7"
                width="16"
                height="2"
                rx="1"
                :class="mobileNavOpen ? 'opacity-0' : ''"
              ></rect>

              <!-- Bottom bar -->
              <rect
                class="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="11"
                width="16"
                height="2"
                rx="1"
                :class="mobileNavOpen ? '-rotate-45 -translate-y-[5px]' : ''"
              ></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <Transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
            >
              <ul class="text-sm p-2">
                <Dropdown title="Layanan" mobile>
                  <ul class="dropdown-menu">
                    <li v-for="link in fundingLinks" :key="link.path">
                      <router-link
                        class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                        :to="link.path"
                        >{{ link.title }}</router-link
                      >
                    </li>
                  </ul>
                </Dropdown>

                <li
                  v-for="link in aboutLinks"
                  :key="link.path"
                  class="px-3 py-1"
                >
                  <router-link
                    class="text-gray-700 hover:text-gray-900 flex items-center transition"
                    :to="link.path"
                    >{{ link.title }}</router-link
                  >
                </li>

                <Dropdown title="Bantuan" mobile>
                  <ul class="dropdown-menu">
                    <li v-for="link in serviceLinks" :key="link.path">
                      <router-link
                        class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                        :to="link.path"
                        >{{ link.title }}</router-link
                      >
                    </li>
                  </ul>
                </Dropdown>

                <Dropdown :title="`TKB90=${tkbData.tkb90 || ''}`" mobile>
                  <!-- Dynamically render TKB data -->
                  <li v-if="tkbData.tkb0">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB0 = {{ tkbData.tkb0 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb30">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB30 = {{ tkbData.tkb30 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb60">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB60 = {{ tkbData.tkb60 }}
                    </span>
                  </li>
                  <li v-if="tkbData.tkb90">
                    <span
                      class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                    >
                      TKB90 = {{ tkbData.tkb90 }}
                    </span>
                  </li>
                </Dropdown>
              </ul>
            </nav>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>
