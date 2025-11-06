<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import Axios from "axios";
import Dropdown from "./Dropdown.vue";
import MobileView from "./MobileView.vue"; // Import the new MobileView component

const tkbData = ref({});
const windowWidth = ref(window.innerWidth);

// Computed property to determine if we should show mobile menu
const useMobileMenu = computed(() => {
  return windowWidth.value < 1024; // Switch to mobile menu below lg breakpoint
});

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
  { path: "/privacy-policy", title: "Kebijakan Privasi" },
  // { path: "/blog", title: "Blog" },
];

const fundingLinks = [
  { path: "/loans", title: "Pinjaman" },
  { path: "/investment", title: "Pendanaan" },
];

// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

// Add function to handle TKB data caching
const fetchTKBData = () => {
  // Check if data is available in localStorage and still valid (not older than 1 hour)
  const cachedData = localStorage.getItem("tkbData");
  const cachedTimestamp = localStorage.getItem("tkbDataTimestamp");
  const currentTime = new Date().getTime();

  // If there's cached data and it's less than 1 hour old (3600000 ms)
  if (
    cachedData &&
    cachedTimestamp &&
    currentTime - parseInt(cachedTimestamp) < 3600000
  ) {
    try {
      tkbData.value = JSON.parse(cachedData);
      console.log("Using cached TKB data");

      // Optional: Refresh data in background if it's older than 30 minutes
      if (currentTime - parseInt(cachedTimestamp) > 1800000) {
        refreshTKBDataInBackground();
      }
    } catch (error) {
      console.error("Error parsing cached TKB data:", error);
      fetchTKBDataFromAPI();
    }
  } else {
    // If no cache exists or cache has expired, fetch from API
    fetchTKBDataFromAPI();
  }
};

// Function to fetch data from API
const fetchTKBDataFromAPI = () => {
  Axios.get("https://ap-api.adapundi.com/compliance/tkbdata")
    .then((response) => {
      if (response.data.success) {
        tkbData.value = response.data.data;

        // Save data to localStorage
        localStorage.setItem("tkbData", JSON.stringify(response.data.data));
        localStorage.setItem(
          "tkbDataTimestamp",
          new Date().getTime().toString()
        );
        console.log("TKB data fetched and cached");
      }
    })
    .catch((error) => {
      console.error("Error fetching TKB data:", error);
    });
};

// Function to update data in background without disrupting UI
const refreshTKBDataInBackground = () => {
  Axios.get("https://ap-api.adapundi.com/compliance/tkbdata")
    .then((response) => {
      if (response.data.success) {
        tkbData.value = response.data.data;

        // Update cache
        localStorage.setItem("tkbData", JSON.stringify(response.data.data));
        localStorage.setItem(
          "tkbDataTimestamp",
          new Date().getTime().toString()
        );
        console.log("TKB data updated in background");
      }
    })
    .catch((error) => {
      console.error("Error refreshing TKB data:", error);
    });
};

onMounted(() => {
  fetchTKBData();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header class="fixed top-2 md:top-6 w-full z-30">
    <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
      <div
        class="relative flex items-center justify-between h-16 rounded-2xl px-2 sm:px-3 backdrop-blur-sm bg-white/100 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none"
      >
        <!-- Site branding -->
        <div class="flex items-center flex-shrink-0 mr-2">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="adapundi">
            <img
              src="@/images/logo/logo_new.png"
              alt="Adapundi"
              class="object-contain h-9 w-auto"
              loading="lazy"
            />
          </router-link>
        </div>

        <!-- Desktop navigation - only show when not using mobile menu -->
        <nav v-if="!useMobileMenu" class="flex grow justify-center">
          <!-- Desktop menu links -->
          <ul class="flex justify-center items-center gap-1 sm:gap-2 lg:gap-4">
            <Dropdown
              title="Layanan"
              class="text-sm md:text-base text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              <ul class="dropdown-menu">
                <li v-for="link in fundingLinks" :key="link.path">
                  <router-link
                    class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                    :to="link.path"
                    >{{ link.title }}</router-link
                  >
                </li>
              </ul>
            </Dropdown>

            <li
              v-for="link in aboutLinks"
              :key="link.path"
              class="px-1 sm:px-2 py-1"
            >
              <router-link
                class="text-sm md:text-base text-gray-700 hover:text-gray-900 flex items-center transition whitespace-nowrap"
                :to="link.path"
                >{{ link.title }}</router-link
              >
            </li>

            <Dropdown
              title="Bantuan"
              class="text-sm md:text-base text-gray-700 hover:text-gray-900 whitespace-nowrap"
            >
              <ul class="dropdown-menu">
                <li v-for="link in serviceLinks" :key="link.path">
                  <router-link
                    class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                    :to="link.path"
                    >{{ link.title }}</router-link
                  >
                </li>
              </ul>
            </Dropdown>
          </ul>
        </nav>

        <!-- Desktop TKB data dropdown - only show when not using mobile menu -->
        <div
          v-if="!useMobileMenu"
          class="flex justify-end items-center flex-shrink-0 ml-2"
        >
          <Dropdown
            :title="`TKB90=${tkbData.tkb90 || ''}`"
            class="text-sm md:text-base text-gray-700 hover:text-gray-900 whitespace-nowrap"
          >
            <ul class="dropdown-menu">
              <li v-if="tkbData.tkb0">
                <span
                  class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                >
                  TKB0 = {{ tkbData.tkb0 }}
                </span>
              </li>
              <li v-if="tkbData.tkb30">
                <span
                  class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                >
                  TKB30 = {{ tkbData.tkb30 }}
                </span>
              </li>
              <li v-if="tkbData.tkb60">
                <span
                  class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                >
                  TKB60 = {{ tkbData.tkb60 }}
                </span>
              </li>
              <li v-if="tkbData.tkb90">
                <span
                  class="text-xs sm:text-xs md:text-sm lg:text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg whitespace-nowrap"
                >
                  TKB90 = {{ tkbData.tkb90 }}
                </span>
              </li>
            </ul>
          </Dropdown>
        </div>

        <!-- Mobile menu - use the new MobileView component -->
        <div v-if="useMobileMenu" class="flex">
          <MobileView
            :aboutLinks="aboutLinks"
            :serviceLinks="serviceLinks"
            :fundingLinks="fundingLinks"
            :tkbData="tkbData"
          />
        </div>
      </div>
    </div>
  </header>
</template>
