<script setup>
import CarouselPartnerItem from "./CarouselPartnerItem.vue";
import BCALogo from "@/images/partner/bca.png";
import InstamoneyLogo from "@/images/partner/instamoney.png";
import FaspayLogo from "@/images/partner/faspay.png";
import BNILogo from "@/images/partner/bni.png";
import SeaBankLogo from "@/images/partner/seabank.png";
import BNCLogo from "@/images/partner/bnc.png";
import DBS from "@/images/payment/dbs.png";
import OVO from "@/images/payment/ovo.png";
import Privy from "@/images/partner/privy.png";

const CarouselPartner = [
  {
    img: BCALogo,
    alt: "Bank Central Asia (BCA) Logo",
  },
  {
    img: InstamoneyLogo,
    alt: "Instamoney Logo",
  },
  {
    img: FaspayLogo,
    alt: "Faspay Logo",
  },
  {
    img: BNCLogo,
    alt: "Bank Neo Commerce (BNC) Logo",
  },
  {
    img: BNILogo,
    alt: "Bank Negara Indonesia (BNI) Logo",
  },
  {
    img: SeaBankLogo,
    alt: "SeaBank Logo",
  },
  {
    img: DBS,
    alt: "DBS Bank Logo",
  },
  {
    img: OVO,
    alt: "OVO Logo",
  },
  {
    img: Privy,
    alt: "Privy Logo",
  },
];
</script>

<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-8 sm:pt-12 md:pt-20">
        <!-- Title Section -->
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
            Didukung Partner Terpercaya
          </h2>
        </div>

        <!-- Carousel Container dengan margin top -->
        <div class="mt-8 sm:mt-10 md:mt-12 relative flex justify-center">
          <!-- Carousel -->
          <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] group"
          >
            <div
              class="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              <!-- Items -->
              <CarouselPartnerItem
                v-for="(item, index) in CarouselPartner"
                :key="index"
                :testimonial="item"
                class="w-[9rem] md:w-[16rem] group-hover:rotate-0 transition-transform duration-300"
              >
              </CarouselPartnerItem>
            </div>
            <div
              class="flex items-center justify-start [&>*]:mx-2 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              <!-- Items -->
              <CarouselPartnerItem
                v-for="(item, index) in CarouselPartner"
                :key="index"
                :testimonial="item"
                class="w-[9rem] md:w-[16rem] group-hover:rotate-0 transition-transform duration-300"
              >
              </CarouselPartnerItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
