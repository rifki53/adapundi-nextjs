<template>
  <section class="bg-neutral">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <!-- Title -->
      <h2
        class="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8"
      >
        Pernyataan Keuangan
      </h2>

      <!-- Links Container -->
      <div class="bg-white">
        <!-- Green Header -->
        <div class="bg-custom-green3 px-6 py-3">
          <span class="text-sm font-medium font-inter">
            Download Pernyataan Keuangan
          </span>
        </div>
        <div class="flex flex-col">
          <!-- Financial Statement Links -->
          <template
            v-for="statement in financialStatements"
            :key="statement.year"
          >
            <a
              :href="statement.file"
              target="_blank"
              class="flex items-center gap-2.5 px-6 py-3 hover:bg-[#e2e7f0] transition-colors duration-200 text-gray-500 hover:text-gray-900 border-b border-gray-200"
            >
              <i class="pi pi-file-pdf text-base"></i>
              <span class="text-sm font-medium font-inter">
                Pernyataan Keuangan {{ statement.year }}
              </span>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const financialStatements = [
  { year: 2024, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2024.pdf" },
  { year: 2023, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2023.pdf" },
  { year: 2022, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2022.pdf" },
  { year: 2021, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2021.pdf" },
  { year: 2020, file: "https://assets.adapundi.com/adapundi/file/Pernyataan-Keuangan-2020.pdf" },
];
</script>
