<template>
  <section class="bg-neutral">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <!-- Title -->
      <h2
        class="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8"
      >
        Daftar Piutang Tidak Tertagih
      </h2>

      <!-- Links Container -->
      <div class="bg-white">
        <!-- Green Header -->
        <div class="bg-custom-green3 px-6 py-3">
          <span class="text-sm font-medium font-inter">
            Download Lampiran
          </span>
        </div>
        <div class="flex flex-col">
          <!-- Uncollectible Receivables Links -->
          <template v-for="item in uncollectibleReceivables" :key="item.year">
            <a
              :href="item.file"
              target="_blank"
              class="flex items-center gap-2.5 px-6 py-3 hover:bg-[#e2e7f0] transition-colors duration-200 text-gray-500 hover:text-gray-900 border-b border-gray-200"
            >
              <i class="pi pi-file-pdf text-base"></i>
              <span class="text-sm font-medium font-inter">
                Daftar Piutang Tidak Tertagih {{ item.year }}
              </span>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const uncollectibleReceivables = [
  {
    year: 2024,
    file: "https://assets.adapundi.com/adapundi/file/Daftar_Piutang_Yang_Tidak_Dapat_Tertagih_2024_.pdf",
  },
];
</script>
