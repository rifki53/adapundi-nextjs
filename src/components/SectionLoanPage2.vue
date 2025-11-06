<script setup>
import CarouselPartnerItemAlt from "./CarouselPartnerItemAlt.vue";
import Alfa from "@/images/payment/alfa.png";
import Bca from "@/images/payment/bca.png";
import Bni from "@/images/payment/bni.png";
import Bri from "@/images/payment/bri.png";
import Ovo from "@/images/payment/ovo.png";
// import Dbs from "@/images/payment/dbs.png";
// import LinkAja from "@/images/payment/link-aja.png";
// import Seabank from "@/images/payment/seabank.png";
// import Bnc from "@/images/payment/bnc.png";

const CarouselPartner = [
  {
    img: Ovo,
    alt: "OVO Logo",
  },
  {
    img: Bca,
    alt: "Bank Central Asia (BCA) Logo",
  },
  {
    img: Bni,
    alt: "Bank Negara Indonesia (BNI) Logo",
  },
  {
    img: Bri,
    alt: "Bank Rakyat Indonesia (BRI) Logo",
  },
  {
    img: Alfa,
    alt: "Alfamart Logo",
  },
];
</script>

<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <div class="pt-8 sm:pt-12 md:pt-20">
        <!-- Title Section -->
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
            Mitra Pembayaran
          </h2>
        </div>

        <!-- Carousel Container -->
        <div class="mt-8 sm:mt-10 md:mt-12 relative flex justify-center">
          <!-- Carousel -->
          <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] group"
          >
            <div
              class="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              <!-- Items -->
              <CarouselPartnerItemAlt
                v-for="(item, index) in CarouselPartner"
                :key="index"
                :testimonial="item"
                class="w-[9rem] md:w-[16rem] group-hover:rotate-0 transition-transform duration-300"
              >
              </CarouselPartnerItemAlt>
            </div>
            <!-- Duplicated element for infinite scroll -->
            <div
              class="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              <!-- Items -->
              <CarouselPartnerItemAlt
                v-for="(item, index) in CarouselPartner"
                :key="index"
                :testimonial="item"
                class="w-[9rem] md:w-[16rem] group-hover:rotate-0 transition-transform duration-300"
              >
              </CarouselPartnerItemAlt>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
