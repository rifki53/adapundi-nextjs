<script setup>
import Accordion from "../components/Accordion.vue";

const faqs03 = [
  {
    question:
      "Bagaimanakah cara untuk mengecek keaslian informasi terkait Adapundi?",
    answer:
      "Untuk memverifikasi informasi yang kamu dapatkan, kamu dapat menghubungi nomor resmi layanan pelanggan di (021)50860666, chat dalam aplikasi, atau sosial media Adapundi di Instagram, Facebook, dan Tiktok yaitu adapundi_official_id yang memiliki lencana verifikasi.",
    active: false,
  },
  {
    question:
      "Apa yang harus dilakukan jika saya menerima tawaran bantuan pencairan pinjaman?",
    answer:
      "Pihak Adapundi tidak pernah menjanjikan adanya bantuan pencairan pinjaman yang dilakukan di luar dari aplikasi Adapundi. Mohon untuk memastikan menerima informasi hanya dari saluran komunikasi resmi Adapundi yang tertera di atas.",
    active: false,
  },
  {
    question:
      "Apakah saya akan dikenakan biaya saat melakukan proses pengaduan di Adapundi?",
    answer:
      "Adapundi tidak mengenakan biaya apa pun kepada pengguna atas pelayanan pengaduan. Biaya yang timbul saat menghubungi tim layanan pengaduan seperti tarif telepon seluler atau kuota internet tidak ditanggung oleh pihak Adapundi.",
    active: false,
  },
];
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="pb-12 md:pb-20">
      <div class="grid grid-cols-12 gap-8">
        <!-- Title on the left -->
        <div class="col-span-3">
          <h2 class="text-2xl font-bold">
            Tips<br />Keamanan
          </h2>
        </div>
        <!-- Accordion on the right -->
        <div class="col-span-9">
          <div class="space-y-2">
            <template v-for="(faq, index) in faqs03">
              <Accordion
                :title="faq.question"
                :id="`faqs-01-${index}`"
                :active="faq.active"
              >
                {{ faq.answer }}
              </Accordion>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
