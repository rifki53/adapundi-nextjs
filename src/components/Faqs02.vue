<script setup>
import Accordion from "../components/Accordion.vue";

// const faqs01 = [
//   {
//     question: "Pengaduan Layanan Pengguna Konsumen",
//     answer:
//       "Layanan Pengaduan Adapundi ini dibentuk dan disusun berdasarkan Peraturan Otoritas Jasa Keuangan No.18/POJK.07/2018 tentang Layanan Pengaduan Konsumen di Sektor Jasa Keuangan dan Surat Edaran Otoritas Jasa Keuangan No. 2/SEOJK.07/2014 tentang Pelayanan dan Penyelesaian Pengaduan Konsumen pada Pelaku Usaha Jasa Keuangan. Adapundi berkomitmen untuk menjalin hubungan baik dengan Konsumen kami dan juga memberikan layanan pengaduan terbaik dengan menerapkan prinsip transparansi dan terbuka dalam memberikan informasi kepada Konsumen.",
//   },
// ];

const pengaduanLayanan = [
  {
    question: "Pengaduan Layanan Pengguna Konsumen",
    answer:
      "Layanan Pengaduan Adapundi ini dibentuk dan disusun berdasarkan Peraturan Otoritas Jasa Keuangan No.18/POJK.07/2018 tentang Layanan Pengaduan Konsumen di Sektor Jasa Keuangan dan Surat Edaran Otoritas Jasa Keuangan No. 2/SEOJK.07/2014 tentang Pelayanan dan Penyelesaian Pengaduan Konsumen pada Pelaku Usaha Jasa Keuangan. Adapundi berkomitmen untuk menjalin hubungan baik dengan Konsumen kami dan juga memberikan layanan pengaduan terbaik dengan menerapkan prinsip transparansi dan terbuka dalam memberikan informasi kepada Konsumen.",
    active: true,
  },
  {
    question: "Penerimaan Pengaduan",
    answer:
      "Setiap pengguna Adapundi dapat menyampaikan pengaduannya melalui beberapa sarana yang telah kami sediakan baik secara lisan seperti telepon ke hotline kami di 021-50860666 atau mendatangi langsung kantor operasional Adapundi yang tertera pada halaman website. Selain itu pengguna Adapundi juga dapat menyampaikan pengaduannya secara lisan melalui Live Chat Aplikasi, Email ke cs@Adapundi.com, maupun media sosial kami:",
    links: [
      { text: "Email: cs@Adapundi.com", href: "mailto:cs@Adapundi.com" },
      {
        text: "Facebook: adapundi_official_id",
        href: "https://www.facebook.com/adapundi.official.indonesia",
      },
      {
        text: "Instagram: @adapundi_official_id",
        href: "https://www.instagram.com/adapundi_official_id/?hl=id",
      },
      {
        text: "TikTok: @adapundi_official_id",
        href: "https://www.tiktok.com/@adapundi_official_id",
      },
      { text: "Twitter: @AdaPundi", href: "https://twitter.com/AdaPundi/" },
    ],
    active: false,
  },
  {
    question: "Penanganan Pengaduan",
    answer:
      "Setelah pengaduan pelanggan kami terima, tim customer service kami akan memberikan respons dan nomor laporan pengaduan pelanggan setiap hari mulai dari pukul 08:00 hingga 20:00. Tim customer service kami akan memberikan respons selambat-lambatnya 5 hari kerja setelah pengaduan diterima.",
    active: false,
  },
  {
    question: "Penyelesaian Pengaduan",
    answer:
      "Tim customer service Adapundi dapat secara langsung melakukan penyelesaian terhadap pengaduan Konsumen apabila data dan informasi yang diterima telah akurat dan benar. Terhadap pengaduan tersebut dapat diberikan solusi secara langsung sejak pengaduan diterima apabila tidak melibatkan pihak lain. Jika pengaduan melibatkan pihak lain, Adapundi membutuhkan waktu penyelesaian pengaduan Konsumen selambat-lambatnya dalam jangka waktu 20 (dua puluh) hari kerja atau lebih tergantung pada tingkat kompleksitas pengaduan Konsumen.",
    active: false,
  },
  {
    question: "Pelaporan Pengaduan",
    answer:
      "Adapundi secara berkala melakukan Pelaporan Pengaduan Konsumen ke Otoritas Jasa Keuangan sebagai bentuk pertanggungjawaban penyedia layanan pengaduan konsumen disertai dengan status pengaduan, jenis pengaduan dan penyebab pengaduan untuk periode bulanan dan triwulan yang formatnya sudah ditentukan oleh Otoritas Jasa Keuangan.",
    active: false,
  },
];
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 class="text-xl font-bold mb-5">Layanan Pengaduan</h2>
            <div class="space-y-2">
              <Accordion
                v-for="(faq, index) in pengaduanLayanan"
                :key="index"
                :title="faq.question"
                :id="`faqs-${index}`"
                :active="faq.active"
                :answer="faq.answer"
                :links="faq.links"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
