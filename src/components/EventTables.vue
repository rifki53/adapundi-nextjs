<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Hero content -->
        <!-- Activities table -->
        <div>
          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-600">
              <thead class="text-xs text-gray-700 uppercase bg-green-100">
                <tr>
                  <th scope="col" class="px-6 py-3">No</th>
                  <th scope="col" class="px-6 py-3">Tanggal</th>
                  <th scope="col" class="px-6 py-3">Nama</th>
                  <th scope="col" class="px-6 py-3">Tempat</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="activity in activities"
                  :key="activity.no"
                  class="bg-white border-b hover:bg-green-50"
                >
                  <td class="px-6 py-4 font-medium text-gray-600">
                    {{ activity.no }}
                  </td>
                  <td class="px-6 py-4">{{ activity.tanggal }}</td>
                  <td class="px-6 py-4">{{ activity.nama }}</td>
                  <td class="px-6 py-4">{{ activity.tempat }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { ref } from "vue";
import PageIllustration from "./PageIllustration.vue";

export default {
    components: {
    PageIllustration
  },
  setup() {
    const activities = ref([
      {
        no: "01",
        tanggal: "01 November 2019",
        nama: "Financial Technology Progress in Indonesia",
        tempat:
          "El Bajo, Commodus Polytechnic, Labuan Bajo, Nusa Tenggara Timur",
      },
      {
        no: "02",
        tanggal: "26 November 2019",
        nama: "Yang Muda Yang Berbisnis (Youth & Entrepeneurship)",
        tempat: "Telkom University, Bandung, Jawa Barat",
      },
      {
        no: "03",
        tanggal: "11 Desember 2019",
        nama: "FinTech: Now or Never",
        tempat: "Sebelas Maret University, Solo/Surakarta, Jawa Tengah",
      },
      {
        no: "04",
        tanggal: "13 Desember 2019",
        nama: "Legal FinTech Socialization & Education",
        tempat: "Trisco TAM Factory, Bandung, Jawa Barat",
      },
      {
        no: "05",
        tanggal: "14 Desember 2019",
        nama: "Modern Financial Solutions with FinTech",
        tempat: "STIE YKP Yogyakarta, Yogyakarta",
      },
      {
        no: "06",
        tanggal: "13 Januari 2020",
        nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
        tempat: "Hansanuddin University of Makassar, Sulawesi Selatan",
      },
      {
        no: "07",
        tanggal: "15 Januari 2020",
        nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
        tempat: "State University of Gorontalo, Sulawesi Utara",
      },
      {
        no: "08",
        tanggal: "17 Januari 2020",
        nama: "Challenge and Possibilities: Entrepeneurship and FinTech",
        tempat: "Sam Ratulangi University, Manado, Sulawesi Utara",
      },
      {
        no: "09",
        tanggal: "22 Januari 2020",
        nama: "Smart Utilization of FinTech",
        tempat: "Cambridge City Square, Medan, Sumatera Utara",
      },
      {
        no: "10",
        tanggal: "22 Januari 2020",
        nama: "Smart Utilization of FinTech",
        tempat: "Universal University, Batam",
      },
      {
        no: "11",
        tanggal: "14 Februari 2020",
        nama: "Financial Innovation and FinTech",
        tempat: "Bengkulu University, Bengkulu",
      },
      {
        no: "12",
        tanggal: "18 Februari 2020",
        nama: "Legal FinTech and Entrepeneurship",
        tempat: "University of Jambi, Jambi",
      },
      {
        no: "13",
        tanggal: "26 - 27 Februari 2020",
        nama: "FIN EAST : Cerdas di Era Industri 4.0",
        tempat: "Aston Hotel Kupang, Nusa Tenggara Timur",
      },
      {
        no: "14",
        tanggal: "26 Oktober 2021",
        nama: "FinTech Lending Sebagai Inovasi dan Solusi Keuangan di Masa Pandemi",
        tempat: "Universitas Maritim Raja Ali Haji, Tanjung Pinang",
      },
      {
        no: "15",
        tanggal: "28 Oktober 2021",
        nama: "FinTech Socialization",
        tempat: "IAIN Bukit Tinggi, Bukit Tinggi",
      },
      {
        no: "16",
        tanggal: "26 November 2021",
        nama: "FinTech Socialization",
        tempat: "Online, Malang",
      },
      {
        no: "17",
        tanggal: "23 - 25 Juni 2022",
        nama: "FinTech Socialization",
        tempat: "Online, Makassar",
      },
      {
        no: "18",
        tanggal: "8 Juni 2023",
        nama: "Muda Paham FinTech: Kiat Paham Penggunaan Inovasi Teknologi",
        tempat: "Kepulauan Bangka Belitung",
      },
      {
        no: "19",
        tanggal: "17 Juli 2023",
        nama: "Cerdas Pakai FinTech: Maksimalkan Potensi Keuangan Digital",
        tempat: "Politeknik eLBajo Commodus, Labuan Bajo, Nusa Tenggara",
      },
      {
        no: "20",
        tanggal: "20 - 25 Oktober 2023",
        nama: "Muda Paham Fintech",
        tempat: "Universitas Palangkaraya, Kalimantan Tengah",
      },
      {
        no: "21",
        tanggal: "26 Juni 2024",
        nama: "Fintech Regular Goes To Campus 2024",
        tempat: "Universitas Muhammadiyah Yogyakarta, DI Yogyakarta",
      },
      {
        no: "22",
        tanggal: "27 September 2024",
        nama: "Pengusaha Kreatif Fintech",
        tempat: "Malang Creative Center, Malang",
      },
    ]);

    return {
      activities,

    };
  },
};
</script>
