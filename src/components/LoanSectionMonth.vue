<script setup>
import { ref } from 'vue';

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
    default: 31,
  },
  maxTerm: {
    type: Number,
    default: 360,
  },
});

const emit = defineEmits(['submit']);

// State
const valueLoans = ref(100000000);
const valueTenure = ref(360);
const backgroundSize = ref('100% 100%');
const backgroundSize2 = ref('100% 100%');
const sliderColor = ref(
  'linear-gradient(to right, #10B981 100%, #e5e7eb 100%)'
); // Warna hijau untuk progress
const sliderColor2 = ref(
  'linear-gradient(to right, #10B981 100%, #e5e7eb 100%)'
); // Warna hijau untuk progress

// Methods
const numberFormat = (num) => {
  return num.toLocaleString('id-ID');
};

const calculateInterest = (loanAmount, tenure, additionalRate) => {
  let monthlyInterestRate = 0.0025 + additionalRate / 100;
  const totalAmount = loanAmount * (tenure * monthlyInterestRate + 1);
  const monthlyPayment = totalAmount / tenure;
  return {
    totalAmount: numberFormat(Math.floor(totalAmount)),
    monthlyPayment: numberFormat(Math.floor(monthlyPayment)),
  };
};
const updateSlider = (e) => {
  const val = Number(e.target.value);
  valueLoans.value = val;
  const percentage =
    ((val - props.minAmount) * 100) / (props.maxAmount - props.minAmount);
  backgroundSize.value = `${percentage}% 100%`;
  // Update warna slider dengan gradient
  sliderColor.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const updateSliderTwo = (e) => {
  const val = Number(e.target.value);
  const percentage =
    ((val - props.minTerm) * 100) / (props.maxTerm - props.minTerm);
  backgroundSize2.value = `${percentage}% 100%`;
  // Update warna slider dengan gradient
  sliderColor2.value = `linear-gradient(to right, #10B981 ${percentage}%, #e5e7eb ${percentage}%)`;
};

const handleSubmit = () => {
  if (props.isLoans === 0) {
    window.open(
      'https://adapundi.onelink.me/cN17/bs728o5c',
      '_blank',
      'noopener,noreferrer'
    );
  } else {
    emit('submit');
  }
};
</script>

<template>
  <section class="relative bg-custom-green">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-18">
      <!-- Main content -->
      <!-- Section -->
      <div class="container mx-auto px- mt-12">
        <div class="flex flex-wrap -mx-4">
          <!-- Hero Text Section -->
          <div class="w-full md:w-3/5 px-6 py-8">
            <p class="text-white text-4xl font-bold mb-6">
              Nikmati Pinjaman Daring Langsung Cair dengan Bunga Rendah
            </p>

            <p class="text-white text-xl mb-6">
              Cek limitmu dan ajukan sekarang juga. Dapatkan solusi keuangan
              yang mudah, cepat dan aman.
            </p>

            <div class="space-y-4">
              <!-- <p class="text-white text-lg">
                Cek limitmu dan ajukan sekarang juga. Dapatkan solusi keuangan
                yang mudah, cepat dan aman.
              </p> -->

              <p class="text-white text-sm">
                Adapundi berizin dan diawasi OJK, serta resmi tergabung di AFPI
              </p>
            </div>
          </div>

          <!-- Simulation Form Section -->
          <div class="w-full md:w-2/5 px-4">
            <div class="bg-white rounded-lg shadow-md p-6 mt-6 md:mt-0">
              <!-- Header -->
              <h6 class="text-xl text-center font-semibold text-gray-900 mb-3">
                KALKULATOR PINJAMAN
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
              <div class="pb-6 border-b border-gray-200">
                <div class="flex justify-between mb-2">
                  <h6 class="font-semibold text-gray-900">Tenor</h6>
                  <span class="text-green-600">
                    {{ valueTenure }} {{ isLoans === 0 ? 'Hari' : 'Periode' }}
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
                    {{ isLoans === 0 ? 'Hari' : 'Periode' }}
                  </span>
                  <span>
                    {{ numberFormat(maxTerm) }}
                    {{ isLoans === 0 ? 'Hari' : 'Periode' }}
                  </span>
                </div>
              </div>

              <!-- Total Payment -->
              <!-- Total Payment -->
              <div class="text-center my-2">
                <!-- <h5 class="font-semibold text-gray-900">Total Pinjaman</h5>
                <h4 class="text-green-600 text-xl mt-2">
                  Rp{{
                    calculateInterest(
                      valueLoans,
                      valueTenure,
                      isLoans === 0 ? 0 : 30
                    ).totalAmount
                  }}
                </h4> -->

                <h5 class="font-semibold text-gray-900 mt-4">
                  Cicilan per Bulan
                </h5>
                <h4 class="text-green-600 text-xl mt-2">
                  Rp{{
                    calculateInterest(
                      valueLoans,
                      valueTenure,
                      isLoans === 0 ? 0 : 30
                    ).monthlyPayment
                  }}
                </h4>
              </div>

              <!-- Submit Button -->
              <button
                class="w-full py-3 bg-green-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                @click="handleSubmit"
              >
                Ajukan Sekarang
              </button>

              <!-- Note -->
              <p
                class="text-gray-500 text-xs mt-2 leading-relaxed text-center md:text-left"
              >
                *Catatan: Simulasi pinjaman di atas hanya berupa contoh. Angka
                pinjaman secara rill dapat dicek di aplikasi.
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
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 8px;
  outline: none;
}

/* Styling untuk thumb (bagian yang digeser) */
input[type='range']::-webkit-slider-thumb {
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

input[type='range']::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #10b981;
  cursor: pointer;
  border: none;
}

/* Hapus background default */
input[type='range']::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 8px;
}

input[type='range']::-moz-range-track {
  height: 8px;
  border-radius: 8px;
}
</style>
