<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <!-- Title -->
      <h2
        class="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8"
      >
        Acara dan Kegiatan
      </h2>

      <!-- Table Container with horizontal and vertical scroll -->
      <div
        class="overflow-x-auto shadow-md max-h-[70vh] sm:max-h-[70vh] overflow-y-auto"
      >
        <table class="w-full table-auto border-collapse min-w-full bg-gray-100">
          <thead class="sticky top-0 z-10">
            <tr class="bg-custom-green3 text-left">
              <th
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap"
              >
                Tanggal
              </th>
              <th
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap"
              >
                Nama Kegiatan
              </th>
              <th
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap"
              >
                Tempat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="activity in activities"
              :key="activity.no"
              class="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
            >
              <td
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 whitespace-nowrap"
              >
                {{ activity.tanggal }}
              </td>
              <td
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900"
              >
                {{ activity.nama }}
              </td>
              <td
                class="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900"
              >
                {{ activity.tempat }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
const activities = [
  {
    no: "24",
    tanggal: "17 Juni 2025",
    nama: "Remaja Cemerlang Ahli Fintech",
    tempat: "Universitas Nahdlatul Wathan, Lombok",
  },
  {
    no: "23",
    tanggal: "25 April 2025",
    nama: "Fintech Regular Goes to Campus 2025",
    tempat: "Politeknik Negeri Banyuwangi, Banyuwangi",
  },
  {
    no: "22",
    tanggal: "27 September 2024",
    nama: "Pengusaha Kreatif Fintech",
    tempat: "Malang Creative Center, Malang",
  },
  {
    no: "21",
    tanggal: "31 Juli 2024",
    nama: "Fintech Regular Goes to Campus 2024",
    tempat: "Universitas Negeri Padang, Padang",
  },
  {
    no: "20",
    tanggal: "26 Juni 2024",
    nama: "Fintech Regular Goes To Campus 2024",
    tempat: "Universitas Muhammadiyah Yogyakarta, DI Yogyakarta",
  },
  // Data lama tetap di bawahnya, penomoran mundur
  {
    no: "19",
    tanggal: "20 - 25 Oktober 2023",
    nama: "Muda Paham Fintech",
    tempat: "Universitas Palangkaraya, Kalimantan Tengah",
  },
  {
    no: "18",
    tanggal: "17 Juli 2023",
    nama: "Cerdas Pakai FinTech: Maksimalkan Potensi Keuangan Digital",
    tempat: "Politeknik eLBajo Commodus, Labuan Bajo, Nusa Tenggara",
  },
  {
    no: "17",
    tanggal: "8 Juni 2023",
    nama: "Muda Paham FinTech: Kiat Paham Penggunaan Inovasi Teknologi",
    tempat: "Kepulauan Bangka Belitung",
  },
  {
    no: "16",
    tanggal: "23 - 25 Juni 2022",
    nama: "FinTech Socialization",
    tempat: "Online, Makassar",
  },
  {
    no: "15",
    tanggal: "26 November 2021",
    nama: "FinTech Socialization",
    tempat: "Online, Malang",
  },
  {
    no: "14",
    tanggal: "28 Oktober 2021",
    nama: "FinTech Socialization",
    tempat: "IAIN Bukit Tinggi, Bukit Tinggi",
  },
  {
    no: "13",
    tanggal: "26 Oktober 2021",
    nama: "FinTech Lending Sebagai Inovasi dan Solusi Keuangan di Masa Pandemi",
    tempat: "Universitas Maritim Raja Ali Haji, Tanjung Pinang",
  },
  {
    no: "12",
    tanggal: "26 - 27 Februari 2020",
    nama: "FIN EAST : Cerdas di Era Industri 4.0",
    tempat: "Aston Hotel Kupang, Nusa Tenggara Timur",
  },
  {
    no: "11",
    tanggal: "18 Februari 2020",
    nama: "Legal FinTech and Entrepeneurship",
    tempat: "University of Jambi, Jambi",
  },
  {
    no: "10",
    tanggal: "14 Februari 2020",
    nama: "Financial Innovation and FinTech",
    tempat: "Bengkulu University, Bengkulu",
  },
  {
    no: "09",
    tanggal: "22 Januari 2020",
    nama: "Smart Utilization of FinTech",
    tempat: "Universal University, Batam",
  },
  {
    no: "08",
    tanggal: "22 Januari 2020",
    nama: "Smart Utilization of FinTech",
    tempat: "Cambridge City Square, Medan, Sumatera Utara",
  },
  {
    no: "07",
    tanggal: "17 Januari 2020",
    nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
    tempat: "Sam Ratulangi University, Manado, Sulawesi Utara",
  },
  {
    no: "06",
    tanggal: "15 Januari 2020",
    nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
    tempat: "State University of Gorontalo, Sulawesi Utara",
  },
  {
    no: "05",
    tanggal: "13 Januari 2020",
    nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
    tempat: "Hansanuddin University of Makassar, Sulawesi Selatan",
  },
  {
    no: "04",
    tanggal: "14 Desember 2019",
    nama: "Modern Financial Solutions with FinTech",
    tempat: "STIE YKP Yogyakarta, Yogyakarta",
  },
  {
    no: "03",
    tanggal: "13 Desember 2019",
    nama: "Legal FinTech Socialization & Education",
    tempat: "Trisco TAM Factory, Bandung, Jawa Barat",
  },
  {
    no: "02",
    tanggal: "11 Desember 2019",
    nama: "FinTech: Now or Never",
    tempat: "Sebelas Maret University, Solo/Surakarta, Jawa Tengah",
  },
  {
    no: "01",
    tanggal: "26 November 2019",
    nama: "Yang Muda Yang Berbisnis (Youth & Entrepeneurship)",
    tempat: "Telkom University, Bandung, Jawa Barat",
  },
  {
    no: "00",
    tanggal: "01 November 2019",
    nama: "Financial Technology Progress in Indonesia",
    tempat: "El Bajo, Commodus Polytechnic, Labuan Bajo, Nusa Tenggara Timur",
  },
];
</script>
