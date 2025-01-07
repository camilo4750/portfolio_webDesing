<template>
  <section
    class="min-h-full flex flex-col justify-center items-center p-5"
    id="experience"
  >
    <h2 class="font-bold text-4xl md:text-5xl font-quantico mb-5">
      {{ $t("titleSectionExperience") }}
    </h2>

    <div
      class="relative border-s border-customGreen400 dark:border-customGreen200 md:ms-[8rem] md:me-10"
    >
      <p
        class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0"
      >
        Savne Sass
        <br />
        {{ $t("jobPositionSavne") }}
      </p>
      <li class="mb-10 ms-4 list-none">
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white dark:bg-customGreen700"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <time
          class="mb-1 text-sm font-normal leading-none text-customGreen500 dark:text-customGreen800"
          >Mayo 2022 - Abril 2023
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ $t("juniorSavneExperience.title") }}
        </h3>
        <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
          <ul class="list-disc list-outside ml-4">
            <li>
              {{ $t("juniorSavneExperience.one") }}
            </li>
            <li>
              {{ $t("juniorSavneExperience.two") }}
            </li>
            <li>
              {{ $t("juniorSavneExperience.three") }}
            </li>
            <li>
              {{ $t("juniorSavneExperience.four") }}
            </li>
          </ul>
        </div>
      </li>
      <li class="mb-10 ms-4 list-none">
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <time
          class="mb-1 text-sm font-normal leading-none text-customGreen500 dark:text-customGreen800"
          >abril 2023 - octubre 2024
        </time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ $t("semiSeniorSavneExperience.title") }}
        </h3>
        <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
          <ul class="list-disc list-outside ml-4">
            <li>
              {{ $t("semiSeniorSavneExperience.one") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.two") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.three") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.four") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.five") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.six") }}
            </li>
            <li>
              {{ $t("semiSeniorSavneExperience.seven") }}
            </li>
          </ul>
        </div>
      </li>
    </div>
  </section>
</template>
