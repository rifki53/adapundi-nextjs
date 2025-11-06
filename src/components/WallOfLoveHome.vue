<script setup>
import Testimonial from "./Testimonial.vue";
import videothumb1 from "./../images/videothumb/videothumb-1.png";
import videothumb2 from "./../images/videothumb/videothumb-2.png";
import videothumb3 from "./../images/videothumb/videothumb-3.png";
import cevyimage from "./../images/testimonial/cevy.png";
import shuharti from "./../images/testimonial/suharti.png";
import bahrudin from "./../images/testimonial/bahrudin.png";

const testimonials = [
  {
    img: shuharti,
    name: "Suharti",
    username: "@suharti_wrg",
    date: "13 September 2023",
    content:
      "“Dana yang cepat cairnya sangat membantu usaha saya, terima kasih Adapundi”",
    channel: "Twitter",
    videoThumb: videothumb1,
    videoUrl: "https://assets.adapundi.com/adapundi/media/AP+-+1309+30+sec.mp4",
  },
  {
    img: bahrudin,
    name: "Bahrudin",
    date: "22 August 2023",
    content:
      "“Usaha saya terbantu karena pinjamannya, berlimit tinggi dan tenornya panjang”",
    rating: 5,
    channel: "Google",
    videoThumb: videothumb2,
    videoUrl: "https://assets.adapundi.com/adapundi/media/AP+-+2208+15+sec.mp4",
  },
  {
    img: cevyimage,
    name: "Cevy",
    username: "@cevydina",
    date: "9 April 2023",
    content:
      "“Aplikasi Adapundi limitnya besar dan pencairan cepat, sehingga bisa mendukung usaha saya”",
    channel: "Twitter",
    videoThumb: videothumb3,
    videoUrl:
      "https://assets.adapundi.com/adapundi/media/0920+60sec-App-landscape.mp4",
  },
];
</script>

<template>
  <section class="relative bg-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Sahabat Perjalanan Keuangan Anda
          </h2>
        </div>

        <!-- Testimonials grid -->
        <div class="grid sm:grid-cols-3 gap-4 md:gap-6 items-start">
          <template v-for="(testimonial, index) in testimonials" :key="index">
            <!-- Hide testimonials on mobile except for the first one -->
            <div class="group" :class="{ 'hidden sm:block': index > 0 }">
              <Testimonial :testimonial="testimonial" class="w-full">
                {{ testimonial.content }}
              </Testimonial>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>