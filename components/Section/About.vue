<template>
  <section class="grid grid-cols-1 lg:grid-cols-3 min-h-full" id="about">
    <div class="flex flex-col">
      <div class="flex-grow pl-5 xl:pl-7 2xl:pl-14 mt-5">
        <p
          class="text-6xl font-bold italic md:text-8xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-customGreen800 opacity-0 animateLeft__"
        >
          {{ $t("greetingIntro") }} <br />
          {{ $t("greetingName") }}
      </p>
      </div>
      <div class="flex-grow hidden lg:flex items-center pl-5 xl:pl-7 2xl:pl-14">
        <span
          class="lg:text-sm 2xl:text-lg font-semibol text-[#c79825] dark:text-[#fdb200] font-medium opacity-0 animateLeft__"
          >witcamdev@gmail.com
        </span>
      </div>
      <div
        class="flex-grow hidden lg:flex lg:flex-col justify-center pl-5 xl:pl-7 2xl:pl-14"
      >
      <div class="opacity-0 animateLeft__">
        <div class="flex items-center">
          <span class="lg:text-5xl 2xl:text-6xl font-bold text-customGreen800">
            3
          </span>
          <span class="ml-2 leading-[18px]">
            {{ $t("experienceYear") }} <br />
            {{ $t("experienceDescription") }}
          </span>
        </div>

        <UiDownloadCv />
      </div>
        
      </div>
    </div>
    <div class="order-3 lg:order-none flex items-end">
      <div class="h-full lg:h-[450px] 2xl:h-[600px]">
        <NuxtImg
          src="/img/profile.jpg"
          alt="profile"
          class="w-full h-full object-cover rounded-t-2xl"
          loading="eager"
          format="webp"
          quality="80"
        />
      </div>
    </div>
    <div class="flex flex-col order-2 lg:order-none">
      <div
        class="flex-grow flex flex-col md:justify-center items-center p-4 2xl:p-10"
      >
      <div class="opacity-0 animateRight__">
        <p
          class="md:text-lg lg:text-[11px] xl:text-xs 2xl:text-sm text-start lg:text-center leading-[18px]"
        >
          {{ $t("aboutMe") }}
        </p>
        <UiDownloadCv class="lg:hidden w-[90%] mt-3 mx-auto" />
      </div>
        
      </div>
      <div class="flex-grow hidden lg:flex justify-center items-center px-4 ">
        <div
          class="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 lg:gap-3 gap-5 mt-3 justify-content-center "
        >
          <div v-for="skill in skills" class="flex justify-center items-center opacity-0 animateRight__">
            <div
              class="h-12 lg:h-8 xl:h-10 2xl:h-14 w-12 lg:w-8 xl:w-10 2xl:w-14 p-1 2xl:p-2 rounded border border-customGreen400 shadow-md bg-customGreen50 flex justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2 hover:rotate-[5deg] hover:shadow-xl hover:shadow-customGreen500"
            >
              <img :src="skill.src" :alt="skill.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Skills } from "~/types/Skills";

const { setLocale } = useI18n();

const skills: Skills[] = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    alt: "html5",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    alt: "css3",
  },
  {
    src: "https://cdn.prod.website-files.com/62865614b39c464b76d339aa/66341250ee6e33762fd2c8c7_Bootstrap-original.svg",
    alt: "bootstrap",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    alt: "tailwindcss",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "javascript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    alt: "vuejs",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg",
    alt: "nuxtjs",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "typescript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
    alt: "php",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
    alt: "laravel",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    alt: "postgresql",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
    alt: "linux",
  },
];
</script>

<style scoped></style>
