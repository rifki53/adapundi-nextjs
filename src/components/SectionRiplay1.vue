<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div class="relative overflow-hidden">
        <!-- Section Header -->
        <h2 class="text-center md:text-left text-gray-900 text-3xl sm:text-4xl font-bold mb-6">
          Pengenalan Produk
        </h2>

        <!-- Features Box -->
        <div class="bg-custom-green3 rounded-3xl p-6 sm:p-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
            <!-- Left Column - Main Features -->
            <div class="flex flex-col">
              <h3 class="text-gray-900 text-xl font-bold mb-6">
                Fitur utama produk Pendanaan Adapundi di antaranya:
              </h3>

              <ul
                class="text-lg sm:text-xl font-medium space-y-4 list-disc pl-6 h-full"
              >
                <li>
                  Limit Pendanaan yang dapat dipilih mulai dari
                  <span class="font-bold">Rp100.000</span> hingga
                  <span class="font-bold">Rp100.000.000</span>
                </li>
                <li>
                  Bunga maksimal <span class="font-bold">0,3%</span> per hari
                </li>
                <li>PPN sebesar <span class="font-bold">11%</span></li>
              </ul>
            </div>

            <!-- Right Column - Tenor Options -->
            <div class="flex flex-col">
              <h3 class="text-gray-900 text-xl font-bold mb-6">
                Tenor produk Pendanaan yang tersedia saat ini di antaranya:
              </h3>

              <ul
                class="text-lg sm:text-xl font-medium space-y-4 list-disc pl-6 h-full"
              >
                <li>90 hari dengan tenor 30x3</li>
                <li>120 hari dengan tenor 30x4</li>
                <li>180 hari dengan tenor 30x6</li>
                <li>270 hari dengan tenor 30x9</li>
                <li>360 hari dengan tenor 30x12</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
