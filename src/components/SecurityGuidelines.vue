<script setup></script>

<template>
  <section class="relative bg-gray-100">
    <div class="max-w-6xl mx-auto px-2">
      <div class="pb-12 md:pb-20">
        <div class="p-6 rounded-lg py-12">
          <h2 class="text-3xl font-bold text-center mb-8 pt-8">
            Jaga Diri, Bersama Kita Sikapi
          </h2>
          <p class="text-center mb-8">
            Pastikan kamu mengikuti pedoman keamanan di bawah ini:
          </p>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- JANGAN Bagikan -->
            <div class="bg-white p-6 rounded-lg shadow">
              <h3
                class="text-xl font-semibold text-red-600 mb-4 flex items-center"
              >
                <i class="pi pi-times-circle mr-2"></i>
                JANGAN Bagikan:
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i class="pi pi-lock mt-1 mr-2 text-red-500"></i>
                  <span>Password aplikasi Adapundi</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-key mt-1 mr-2 text-red-500"></i>
                  <span>Kode One Time Password (OTP)</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-id-card mt-1 mr-2 text-red-500"></i>
                  <span>Nomor KTP dan Identitas resmi</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-user mt-1 mr-2 text-red-500"></i>
                  <span>Nama ibu kandung dan info pribadi</span>
                </li>
              </ul>
            </div>

            <!-- SELALU Pastikan -->
            <div class="bg-white p-6 rounded-lg shadow">
              <h3
                class="text-xl font-semibold text-green-600 mb-4 flex items-center"
              >
                <i class="pi pi-check-circle mr-2"></i>
                SELALU Pastikan:
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i class="pi pi-download mt-1 mr-2 text-green-500"></i>
                  <span>Download Aplikasi dari halaman resmi</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-credit-card mt-1 mr-2 text-green-500"></i>
                  <span>Menggunakan Kode VA dari aplikasi</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-phone mt-1 mr-2 text-green-500"></i>
                  <span>Cek kebenaran info melalui CS Resmi</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-verified mt-1 mr-2 text-green-500"></i>
                  <span>Follow akun sosial media terverifikasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
