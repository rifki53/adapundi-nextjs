<script setup>
// --- All your script content remains the same ---
import { ref, computed } from "vue";
import { useWindowSize } from "@vueuse/core";

// --- Image Imports ---
import MobileHero from "@/images/banner/vertical/loan.png";
import DesktopHero from "@/images/illustration/abstract-illustration.svg";

// --- Responsive Logic ---
const { width: screenWidth } = useWindowSize();
const isMobile = computed(() => screenWidth.value < 768); // Tailwind's `md` breakpoint

// --- Component Props & Emits ---
const props = defineProps({
  isLoans: {
    type: Number,
    default: 0,
  },
  timeCount: {
    type: Number,
    default: 60,
  },
  minAmount: {
    type: Number,
    default: 100000,
  },
  maxAmount: {
    type: Number,
    default: 100000000,
  },
  minTerm: {
    type: Number,
    default: 31,
  },
  maxTerm: {
    type: Number,
    default: 360,
  },
});

const emit = defineEmits(["submit"]);

// --- Component State (Calculator Logic) ---
const valueLoans = ref(100000000);
const valueTenure = ref(360);
const sliderColor = ref(
  "linear-gradient(to right, #10B981 100%, #e5e7eb 100%)",
);
const sliderColor2 = ref(
  "linear-gradient(to right, #10B981 100%, #e5e7eb 100%)",
);

// --- Methods ---
const numberFormat = (num) => {
  return num.toLocaleString("id-ID");
};

const calculateInterest = (loanAmount, tenure, additionalRate) => {
  let interestRate = 0.0025 + additionalRate / 100;
  const totalAmount = loanAmount * (tenure * interestRate + 1);
  return numberFormat(Math.floor(totalAmount));
};

const updateSlider = (e) => {
  const val = Number(e.target.value);
  valueLoans.value = val;
  const percentage =
    ((val - props.minAmount) * 100) / (props.maxAmount - props.minAmount);
  sliderColor.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const updateSliderTwo = (e) => {
  const val = Number(e.target.value);
  valueTenure.value = val;
  const percentage =
    ((val - props.minTerm) * 100) / (props.maxTerm - props.minTerm);
  sliderColor2.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const handleSubmit = () => {
  // The redirection logic for isLoans === 0 is now handled by the <a> tag in the template.
  // This function now only handles the form submission case.
  emit("submit");
};
</script>

<template>
  <section
    class="relative bg-custom-green bg-section flex flex-col justify-end md:justify-center min-h-screen md:min-h-147"
    :style="{
      backgroundImage: `url(${isMobile ? MobileHero : DesktopHero})`,
    }"
  >
    <div class="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div class="w-full">
        <div class="flex flex-wrap -mx-4 items-center">
          <!-- Hero Text Section -->
          <div class="w-full md:w-3/5 px-6">
            <h1 class="h2 text-white mb-6 text-center md:text-left">
              Nikmati Pinjaman Daring Bunga Rendah Cepat Cair
            </h1>
            <p class="h4 text-white !font-normal mb-6 hidden md:block">
              Cek limitmu dan ajukan sekarang juga. Dapatkan solusi keuangan
              yang mudah, cepat dan aman.
            </p>
            <div class="space-y-4 hidden md:block">
              <p class="p text-white text-sm">
                Adapundi berizin dan diawasi OJK, serta resmi tergabung di AFPI
              </p>
            </div>
          </div>

          <!-- Simulation Form Section -->
          <div class="w-full md:w-2/5 px-6">
            <div class="bg-white rounded-lg shadow-md p-6">
              <div class="mb-2">
                <div class="flex justify-between mb-2">
                  <h6 class="h4 !text-base">Jumlah Pinjaman</h6>
                  <span class="text-green-600 font-semibold">
                    Rp{{ numberFormat(valueLoans) }}
                  </span>
                </div>
                <input
                  type="range"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
                  :style="{ background: sliderColor }"
                  v-model="valueLoans"
                  :min="minAmount"
                  :max="maxAmount"
                  @input="updateSlider"
                />
                <div class="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Rp{{ numberFormat(minAmount) }}</span>
                  <span>Rp{{ numberFormat(maxAmount) }}</span>
                </div>
              </div>
              <div class="pb-2 border-b border-gray-200">
                <div class="flex justify-between mb-2">
                  <h6 class="h4 !text-base">Tenor</h6>
                  <span class="text-green-600 font-semibold">
                    {{ valueTenure }} {{ isLoans === 0 ? "Hari" : "Periode" }}
                  </span>
                </div>
                <input
                  type="range"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  :style="{ background: sliderColor2 }"
                  v-model="valueTenure"
                  :min="minTerm"
                  :max="maxTerm"
                  @input="updateSliderTwo"
                />
                <div class="flex justify-between mt-2 text-sm text-gray-600">
                  <span>
                    {{ numberFormat(minTerm) }}
                    {{ isLoans === 0 ? "Hari" : "Periode" }}
                  </span>
                  <span>
                    {{ numberFormat(maxTerm) }}
                    {{ isLoans === 0 ? "Hari" : "Periode" }}
                  </span>
                </div>
              </div>
              <div class="text-center my-2">
                <h5 class="h4 !text-base !font-semibold">
                  Jumlah yang harus dibayarkan
                </h5>
                <h4 class="h3 text-green-600 !font-bold mt-2">
                  Rp{{
                    calculateInterest(
                      valueLoans,
                      valueTenure,
                      isLoans === 0 ? 0 : 30,
                    )
                  }}
                </h4>
              </div>

              <!-- Conditional rendering for the button/link -->
              <a
                v-if="isLoans === 0"
                href="https://adapundi.onelink.me/cN17/bs728o5c"
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="block text-center w-full py-3 bg-green-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors breathing"
              >
                Ajukan Sekarang
              </a>
              <button
                v-else
                class="w-full py-3 bg-green-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors breathing"
                @click="handleSubmit"
              >
                Ajukan Sekarang
              </button>

              <p class="p !text-gray-500 !text-xs mt-2">
                *Catatan: Simulasi pinjaman di atas hanya berupa contoh. Angka
                pinjaman secara rill dapat dicek di aplikasi.
              </p>
            </div>
          </div>

          <!-- OJK/AFPI text for mobile view -->
          <div class="w-full px-6 pt-6 text-center block md:hidden">
            <p class="p text-white text-sm">
              Adapundi berizin dan diawasi OJK, <br />
              serta resmi tergabung di AFPI
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* All your style content remains the same */
.bg-section {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 100%;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 8px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: none;
  margin-top: -5px;
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: none;
}
</style>
