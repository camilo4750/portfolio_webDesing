<template>
  <div class="swiper" autoplay="true">
    <div class="swiper-wrapper w-[100%] 2xl:w-[90%]">
      <slot />
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup lang="ts">
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

onMounted(() => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    direction: "horizontal",
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<style>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 500px;
}

.swiper-button-prev,
.swiper-button-next {
  color: #216460;
}
.swiper-pagination-bullet-active {
  background: #216460 !important;
}

@media screen and (max-width: 640px) {
  .swiper {
    padding-top: 20px;
  }
}
</style>
