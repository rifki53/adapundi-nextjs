<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <!-- Section Header -->
      <h2
        class="text-center md:text-left text-gray-900 text-3xl sm:text-4xl font-bold font-montserrat mb-8 sm:mb-12"
      >
        Simulasi Pinjaman
      </h2>

      <!-- Simulation Box -->
      <div class="bg-custom-orange rounded-3xl p-6 sm:p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <!-- Left Column - 90 Days Simulation -->
          <div>
            <h3 class="text-gray-900 text-xl font-bold font-montserrat mb-6">
              Simulasi menggunakan contoh tenor 90 hari dengan suku bunga 0,3%
            </h3>

            <div class="space-y-4">
              <ul class="list-disc pl-8 space-y-3">
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Nilai uang yang diterima Penerima Dana:
                  </span>
                  <span class="font-bold">Rp1.000.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Suku bunga pinjaman 9% per bulan:
                  </span>
                  <span class="font-bold">Rp90.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Nilai uang yang harus dikembalikan dalam 90 hari:
                  </span>
                  <span class="font-bold">Rp1.270.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Estimasi nilai cicilan per bulan:
                  </span>
                  <span class="font-bold">Rp423.000</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Column - 270 Days Simulation -->
          <div>
            <h3 class="text-gray-900 text-xl font-bold font-montserrat mb-6">
              Simulasi menggunakan contoh tenor 270 hari dengan suku bunga 0,2%
            </h3>

            <div class="space-y-4">
              <ul class="list-disc pl-8 space-y-3">
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Nilai uang yang diterima Penerima Dana:
                  </span>
                  <span class="font-bold">Rp1.000.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Suku bunga pinjaman 6% per bulan:
                  </span>
                  <span class="font-bold">Rp60.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Nilai uang yang harus dikembalikan dalam 270 hari:
                  </span>
                  <span class="font-bold">Rp1.540.000</span>
                </li>
                <li class="text-lg sm:text-xl font-montserrat">
                  <span class="font-medium"
                    >Estimasi nilai cicilan per bulan:
                  </span>
                  <span class="font-bold">Rp171.000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
