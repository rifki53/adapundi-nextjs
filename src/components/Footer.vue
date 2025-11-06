<script setup>
import { computed, ref } from "vue";
import androidLogo from "@/images/download/android-cta-logo.png";
import iosLogo from "@/images/download/ios-cta-logo.png";

const props = defineProps({
  border: Boolean,
});

const currentYear = computed(() => new Date().getFullYear());
const contacts = ref([
  {
    icon: "pi pi-phone",
    text: "(021)50860666",
    href: "tel:02150860666",
  },
  {
    icon: "pi pi-whatsapp",
    text: "0812-99925778",
    href: "https://api.whatsapp.com/send/?phone=6281299925778",
    nofollow: true,
  },
  {
    icon: "pi pi-envelope",
    text: "cs@adapundi.com",
    href: "mailto:cs@adapundi.com",
  },
  {
    icon: "pi pi-instagram",
    text: "adapundi_official_id",
    href: "https://www.instagram.com/adapundi_official_id/",
    nofollow: true,
  },
  {
    icon: "pi pi-facebook",
    text: "Adapundi_official_id",
    href: "https://www.facebook.com/adapundi.official.indonesia",
    nofollow: true,
  },
  {
    icon: "pi pi-tiktok",
    text: "adapundi_official_id",
    href: "https://www.tiktok.com/@adapundi_official_id",
    nofollow: true,
  },
  {
    icon: "pi pi-youtube",
    text: "Adapundi Official",
    href: "https://www.youtube.com/@adapundiofficialid",
    nofollow: true,
  },
]);

// OneLink URLs
const androidOneLinkUrl = "https://adapundi.onelink.me/cN17/em5uj56b"; // media source: website_gp
const iosOneLinkUrl = "https://adapundi.onelink.me/cN17/szh8qiwc"; // media source: website_ios
</script>
<template>
  <footer>
    <div class="bg-slate-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-4 pt-8 sm:pt-10 sm:pb-6">
        <div class="w-full border-b border-[#fffefe]/70 py-12 px-0">
          <!-- Logo & Company Name -->
          <div class="mb-10">
            <img
              class="h-10 w-auto mb-4"
              src="@/images/logo/logo_white.png"
              alt="Logo"
              loading="lazy"
            />
            <div class="text-white text-lg font-bold">PT Info Tekno Siaga</div>
          </div>
          Copy
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Left Column -->
            <div class="w-full md:w-3/5 space-y-8">
              <!-- Office Locations -->
              <div class="space-y-6">
                <!-- Head Office -->
                <div class="flex flex-col md:flex-row gap-6">
                  <iframe
                    title="Layanan Pengaduan Konsumen"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2393663710423!2d106.8204061!3d-6.2321436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f33ee31ea1b9%3A0x1ce75f101ca1d69a!2sAdapundi!5e0!3m2!1sen!2sid!4v1736931833881!5m2!1sen!2sid"
                    class="w-full md:w-[228px] h-[137px] rounded-[10px] order-2 md:order-1"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <div class="order-1 md:order-2">
                    <h3 class="text-white text-sm font-semibold mb-2">
                      Kantor Pusat
                    </h3>
                    <p class="text-white text-sm font-normal">
                      Jl. Gatot Subroto No.18, RT.6/RW.1, Kuningan Bar., Kec.
                      Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota
                      Jakarta 12710
                    </p>
                  </div>
                </div>

                <!-- Branch Offices -->
                <div class="flex flex-col md:flex-row gap-6">
                  <iframe
                    title="Kantor Pengaduan"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.78484083005!2d106.8394347!3d-6.1595644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f56e222528cd%3A0x967253d8db07fc7a!2sKantor%20Layanan%20Pengaduan%20Adapundi!5e0!3m2!1sen!2sid!4v1754893389231!5m2!1sen!2sid"
                    class="w-full md:w-[228px] h-[137px] rounded-[10px] order-2 md:order-1"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <div class="order-1 md:order-2">
                    <h3 class="text-white text-sm font-semibold mb-2">
                      Kantor Pengaduan
                    </h3>
                    <p class="text-white text-sm font-normal">
                      Jl. Bungur Besar Raya No.29 RT.11/RW.2, Gn. Sahari Sel.,
                      Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota
                      Jakarta 10610
                    </p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.661502228779!2d106.8115436!3d-6.1760498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f76b99f012bb%3A0x9b8b7e8a3b4abd04!2sAdapundi%20-%20Kantor%20Cabang%20Operasional!5e0!3m2!1sen!2sid!4v1759998379379!5m2!1sen!2sid"
                    class="w-full md:w-[228px] h-[137px] rounded-[10px] order-2 md:order-1"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <div class="order-1 md:order-2">
                    <h3 class="text-white text-sm font-semibold mb-2">
                      Kantor Cabang Operasional
                    </h3>
                    <p class="text-white text-sm font-normal">
                      Jl. Tanah Abang II No.89, RT.1/RW.1, Cideng, Kecamatan
                      Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                      10150
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="w-full md:w-2/5 space-y-8">
              <!-- Contact Section -->
              <div>
                <div class="flex flex-col md:flex-row gap-8">
                  <!-- Left Column: Layanan Pengaduan -->
                  <div class="w-full md:w-1/2">
                    <h2 class="text-white text-md font-bold mb-4">
                      Layanan Pengaduan
                    </h2>

                    <!-- Phone -->
                    <!-- <div class="flex items-center gap-2 mb-2">
                      <i class="pi pi-phone text-white text-xl"></i>
                      <a
                        href="tel:02150860666"
                        class="text-white text-[19px] font-normal"
                      >
                        (021)50860666
                      </a>
                    </div> -->

                    <div class="space-y-2">
                      <div
                        v-for="contact in contacts"
                        :key="contact.text"
                        class="flex items-center gap-2"
                      >
                        <i :class="[contact.icon, 'text-white']"></i>
                        <a
                          v-if="contact.href"
                          :href="contact.href"
                          target="_blank"
                          :rel="
                            contact.nofollow
                              ? 'nofollow noopener noreferrer'
                              : 'noopener noreferrer'
                          "
                          class="text-white text-sm font-normal hover:text-gray-300"
                        >
                          {{ contact.text }}
                        </a>
                        <span v-else class="text-white text-sm font-normal">
                          {{ contact.text }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Right Column: Jam Layanan -->
                  <div class="w-full md:w-1/2">
                    <!-- <h2 class="text-white text-md font-bold mb-4">
                      Penawaran Kerja Sama
                    </h2>

                    <div class="flex items-center gap-2">
                      <i class="pi pi-envelope text-white"></i>
                      <a
                        href="mailto:bd@adapundi.com"
                        class="text-white text-sm font-normal hover:text-gray-300"
                      >
                        bd@adapundi.com
                      </a>
                    </div> -->
                    <h2 class="text-white text-md font-bold mb-4">
                      Jam Layanan Aduan
                    </h2>
                    <div class="text-white text-sm font-normal">
                      <p>Aduan online:</p>
                      <p>Senin - Minggu 08.00 - 20.00</p>
                      <br />
                      <p>Aduan langsung:</p>
                      <p>Senin - Jumat 09.00 - 17.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Certifications -->
              <div class="flex items-start gap-8">
                <div>
                  <p
                    class="text-[#e2dfdf] text-[9px] font-normal leading-[15px]"
                  >
                    Management<br />sistem<br />ISO/IEC 27001:2022
                  </p>
                  <p
                    class="text-[#e2dfdf] text-[9px] font-normal leading-[15px] mt-2"
                  >
                    www.tuvsud.com
                    <br />
                    ID: 2025-4-0210
                  </p>
                </div>
                <img
                  class="w-[75px] h-[75px]"
                  src="@/images/icon/tuv-qr.png"
                  alt="Certification"
                  loading="lazy"
                />
                <div>
                  <p class="text-white text-sm font-normal">
                    Adapundi berizin dan diawasi:
                  </p>
                  <p class="text-white text-sm font-bold">
                    Otoritas Jasa Keuangan (OJK)
                  </p>
                </div>
              </div>

              <!-- Download Section -->
              <div>
                <h2 class="text-white text-lg font-bold mb-4">
                  Download Sekarang
                </h2>
                <div class="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="androidOneLinkUrl"
                    class="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                  >
                    <img
                      :src="androidLogo"
                      class="w-[150px] h-[29px]"
                      alt="Android Download"
                      loading="lazy"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="iosOneLinkUrl"
                    class="bg-white rounded-2xl p-3 flex justify-center items-center w-[183px]"
                  >
                    <img
                      :src="iosLogo"
                      class="w-[150px] h-[29px]"
                      alt="iOS Download"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-300" />

        <!-- Notice Section -->
        <div class="text-white py-4 mb-4 mt-4">
          <h5 class="text-2xl font-bold mb-3">PERHATIAN:</h5>
          <ul class="list-decimal pl-5 space-y-2 text-sm">
            <li>
              Layanan Pendanaan Bersama Berbasis Teknologi Informasi
              (<strong>“LPBBTI”</strong>) adalah penyelenggaraan layanan jasa
              keuangan untuk mempertemukan Pemberi Dana dengan Penerima Dana
              dalam melakukan Pendanaan baik secara konvensional maupun
              berdasarkan prinsip syariah secara langsung melalui Sistem
              Elektronik dengan menggunakan internet.
            </li>
            <li>
              Kegiatan usaha LPBBTI tunduk kepada seluruh ketentuan peraturan
              perundang-undangan yang terkait dengan LPBBTI.
            </li>
            <li>
              Penyelenggara adalah badan hukum Indonesia yang menyediakan,
              mengelola, dan mengoperasikan LPBBTI.
            </li>
            <li>
              Pendanaan adalah penyaluran dana dari Pemberi Dana kepada Penerima
              Dana dengan suatu janji yang akan dibayarkan atau dikembalikan
              sesuai dengan jangka waktu tertentu dalam transaksi LPBBTI.
            </li>
            <li>
              Penyelenggara hanya dapat mengakses, memperoleh, menyimpan,
              mengelola, memproses, dan/atau menggunakan Data Pribadi Pengguna
              setelah mendapatkan persetujuan dari Pengguna.
            </li>
            <li>
              Penyelenggara hanya dapat mengakses kamera, lokasi, dan mikrofon
              pada gawai milik Pengguna.
            </li>
            <li>
              Pengguna harus memahami transaksi dan isi perjanjian LPBBTI,
              termasuk batas maksimum fasilitas Pendanaan disesuaikan dengan
              kemampuan Pengguna dalam melakukan transaksi.
            </li>
            <li>
              Pemberi Dana harus melakukan hal-hal diantaranya:
              <ol class="list-[lower-alpha] pl-5 mt-2 space-y-1">
                <li>
                  memperhitungkan seluruh risiko Pendanaan dalam transaksi
                  LPBBTl;
                </li>
                <li>melakukan langkah mitigasi risiko yang diperlukan; dan</li>
                <li>
                  menandatangani pernyataan telah memahami kinerja dan risiko
                  Penerima Dana, sebagaimana tercantum dalam Lampiran yang
                  merupakan bagian tidak terpisahkan dari Surat Edaran Otoritas
                  Jasa Keuangan ini.
                </li>
              </ol>
            </li>
            <li>
              Penyelenggara menyampaikan prosedur penyelesaian dan penagihan
              kepada Pemberi Dana dan Penerima Dana dalam hal terjadi
              wanprestasi Pendanaan yang dilakukan oleh Penerima Dana.
            </li>
            <li>
              Penyelenggara harus memastikan tidak terjadi kesalahan yang
              menimbulkan kerugian bagi Pengguna.
            </li>
            <li>
              Pengguna menjamin keaslian seluruh dokumen yang disampaikan. Atas
              setiap pemalsuan dokumen atau tindak pidana lain yang dilakukan
              oleh Pengguna, Penyelenggara dapat melakukan upaya hukum termasuk
              memproses tindakan yang dimaksud kepada pihak yang berwenang.
            </li>
            <li>
              Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh Pemberi
              Dana. Tidak ada lembaga atau otoritas negara yang bertanggung
              jawab atas risiko gagal bayar ini.
            </li>
            <li>
              Pemberi Dana yang belum memiliki pengetahuan dan pengalaman
              mengenai Pendanaan disarankan untuk tidak menggunakan layanan ini.
            </li>
            <li>
              Penerima Dana harus mempertimbangkan tingkat bunga Pendanaan dan
              biaya lainnya sesuai kemampuan melunasi.
            </li>
            <li>
              Setiap kecurangan tercatat secara digital dan dapat diketahui
              masyarakat luas.
            </li>
            <li>
              Pengguna harus membaca dan memahami informasi ini sebelum
              memutuskan menjadi Pemberi Dana atau Penerima Dana.
            </li>
            <li>
              Otoritas Jasa Keuangan tidak bertanggung jawab atas pelanggaran
              atau ketidakpatuhan oleh Pengguna.
            </li>
            <li>
              Setiap transaksi Pendanaan wajib melalui
              <em>escrow account</em> dan <em>virtual account</em> atau
              <em>payment gateway</em> sesuai POJK Nomor 40 Tahun 2024.
            </li>
            <li>
              Pelanggaran merupakan bukti pelanggaran hukum oleh Penyelenggara.
            </li>
            <li>
              Penyelenggara tidak mengenakan biaya apa pun kepada Pengguna atas
              pelayanan pengaduan.
            </li>
            <li>
              Hal lain yang perlu diperhatikan terkait karakteristik produk yang
              dimiliki oleh Penyelenggara.
            </li>
          </ul>
        </div>

        <!-- Copyright -->
        <div class="mt-16">
          <div class="text-sm text-white">
            &copy; {{ currentYear }} Adapundi - All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
