<script setup>
import { ref } from "vue";

// Props & Emits
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
    default: 30,
  },
  maxTerm: {
    type: Number,
    default: 360,
  },
});

const emit = defineEmits(["submit"]);

// State
const valueLoans = ref("100000000");
const valueTenure = ref("360");
const sliderColor = ref(
  "linear-gradient(to right, #10B981 100%, #e5e7eb 100%)"
);
const sliderColor2 = ref(
  "linear-gradient(to right, #10B981 100%, #e5e7eb 100%)"
);

const numberFormat = (num) => {
  return Number(num).toLocaleString("id-ID");
};

// Fungsi calculateInterest yang diperbarui dengan faktor bunga yang benar
const calculateInterest = (loanAmount, tenure, additionalRate) => {
  // Konversi ke number untuk memastikan perhitungan yang benar
  loanAmount = Number(loanAmount);
  tenure = Number(tenure);

  // Faktor bunga harian yang diperbarui (0.000383561)
  const dailyFactor = 0.000383561;

  // Perhitungan total dengan bunga
  const totalAmount = loanAmount * (1 + dailyFactor * tenure);

  // Pembulatan ke nilai yang diinginkan
  return numberFormat(Math.round(totalAmount));
};

const updateSlider = (e) => {
  let clickedElement = e.target,
    min = clickedElement.min,
    max = clickedElement.max,
    val = clickedElement.value;

  valueLoans.value = val;
  const percentage = ((val - min) * 100) / (max - min);
  sliderColor.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const updateSliderTwo = (e) => {
  let clickedElement = e.target,
    min = clickedElement.min,
    max = clickedElement.max,
    val = clickedElement.value;

  valueTenure.value = val;
  const percentage = ((val - min) * 100) / (max - min);
  sliderColor2.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const handleSubmit = () => {
  emit("submit");
};
</script>

<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <!-- Main content -->

      <!-- Section -->
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <!-- Hero Text Section -->
          <div class="w-full md:w-1/2 px-6 py-8">
            <div class="mb-6">
              <h2 class="text-3xl font-bold mb-4 text-green-500">
                Pendanaan Pinjaman Adapundi
              </h2>
              <p class="text-gray-600 text-lg leading-relaxed">
                Adapundi adalah perusahaan pendanaan yang menghubungkan Pemberi
                Dana dan Penerima Dana.
              </p>
            </div>
            <ul class="space-y-3 mt-6">
              <li class="flex items-center text-gray-700">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Pembiayaan Usaha Kecil Menengah</span>
              </li>
              <li class="flex items-center text-gray-700">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Tanpa Barang Jaminan</span>
              </li>
              <li class="flex items-center text-gray-700">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span>Pilih Nominal Sesuai Keinginan Anda</span>
              </li>
            </ul>
          </div>

          <!-- Simulation Form Section -->
          <div class="w-full md:w-1/2 px-4">
            <div class="bg-white rounded-lg shadow-md p-6 mt-6 md:mt-0">
              <!-- Header -->
              <h6 class="text-xl text-center font-semibold text-gray-900 mb-6">
                Simulasi Pendanaan Pinjaman
              </h6>

              <!-- Loan Amount Slider -->
              <div class="mb-8">
                <div class="flex justify-between mb-2">
                  <h6 class="font-semibold text-gray-900">Jumlah Pinjaman</h6>
                  <span class="text-green-600">
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

              <!-- Tenure Slider -->
              <div class="mb-8 pb-6 border-b border-gray-200">
                <div class="flex justify-between mb-2">
                  <h6 class="font-semibold text-gray-900">Tenor</h6>
                  <span class="text-green-600">
                    {{ valueTenure }} {{ props.isLoans === 0 ? "Hari" : "Periode" }}
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
                    {{ props.isLoans === 0 ? "Hari" : "Periode" }}
                  </span>
                  <span>
                    {{ numberFormat(maxTerm) }}
                    {{ props.isLoans === 0 ? "Hari" : "Periode" }}
                  </span>
                </div>
              </div>

              <div class="flex flex-row mb-8">
                <div class="text-center w-1/2 border-r pr-4 flex flex-col justify-center">
                  <span class="text-lg">Bunga tahunan kompetitif</span>
                </div>

                <div class="text-center w-1/2 pl-4 flex flex-col justify-center">
                  <div>
                    <div class="text-lg mb-1">Proyeksi Imbal Hasil</div>
                    <div class="text-xl font-semibold text-green-600">
                      Rp{{
                        calculateInterest(
                          valueLoans,
                          valueTenure,
                          props.isLoans === 0 ? 0 : 30
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <a
                v-if="props.isLoans === 0"
                href="https://play.google.com/store/apps/details?id=com.yinshan.program.banda&hl=es_PA"
                target="_blank"
                rel="nofollow noopener noreferrer"
                class="block text-center w-full py-3 bg-green-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
              >
                Ajukan Sekarang
              </a>
              <button
                v-else
                class="w-full py-3 bg-green-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                @click="handleSubmit"
              >
                Ajukan Sekarang
              </button>

              <!-- Note -->
              <p class="text-gray-500 text-xs mt-8 leading-relaxed">
                *Catatan: Simulasi pinjaman di atas hanya berupa contoh, untuk
                simulasi pinjaman secara riil dapat dicek di aplikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Styling untuk input range */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 8px;
  outline: none;
}

/* Styling untuk thumb (bagian yang digeser) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981; /* Warna hijau untuk thumb */
  cursor: pointer;
  border: none;
  margin-top: -5px; /* Untuk posisi vertikal */
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: none;
}

/* Hapus background default */
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 8px;
}

input[type="range"]::-moz-range-track {
  height: 8px;
  border-radius: 8px;
}
</style>
