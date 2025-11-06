<template>
  <section class="relative bg-neutral-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Content Container with responsive grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="order-2 lg:order-1">
          <h2
            class=" text-center md:text-left text-gray-800 text-3xl sm:text-4xl font-bold font-montserrat mb-8"
          >
            Persyaratan Umum
          </h2>

          <div class="text-black">
            <p class="text-lg sm:text-xl font-bold font-montserrat mb-6">
              Persyaratan yang harus dipenuhi
            </p>

            <ul
              class="space-y-2 text-lg sm:text-xl font-medium font-montserrat mb-8 list-disc ml-6"
            >
              <li>Berusia 18 tahun</li>
              <li>Warga Negara Indonesia</li>
              <li>Memiliki nomor HP tetap dan aktif</li>
              <li>Mempunyai pekerjaan/penghasilan tetap</li>
              <li>Memiliki rekening Bank</li>
            </ul>

            <p class="text-lg sm:text-xl font-medium font-montserrat mt-6">
              Selengkapnya dapat dilihat di: <br />

              <router-link
                to="/term-condition"
                class="text-blue-600 hover:underline"
              >
                https://www.adapundi.com/term-condition
              </router-link>
            </p>
          </div>
        </div>

        <!-- Image Container -->
        <!-- Ditambahkan 'hidden lg:flex' untuk kontrol visibilitas -->
        <div
          class="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end"
        >
          <div
            class="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] overflow-hidden"
          >
            <img
              class="w-full h-auto object-cover"
              src="@/images/logo/AP-logo.png"
              alt="Adapundi Logo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
