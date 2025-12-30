<template>
  <section
    class="min-h-full flex flex-col justify-center items-center p-5"
    id="experience"
  >
    <h2 class="font-bold text-4xl md:text-5xl font-quantico mb-5">
      {{ $t("titleSectionExperience") }}
    </h2>

    <div
      class="relative border-s border-customGreen400 dark:border-customGreen200 md:ms-[8rem] md:me-10 "
    >
      <!-- Personal Projects -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experiencePersonalProjects.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experiencePersonalProjects.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experiencePersonalProjects.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bex Soluciones -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceBex.company") }}
          <br />
          <span class="text-xs">{{ $t("experienceBex.contract") }}</span>
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceBex.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceBex.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Disocom -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceDisocom.company") }}
          <br />
          <span class="text-xs">{{ $t("experienceDisocom.contract") }}</span>
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceDisocom.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceDisocom.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Nuxt Frontend Developer -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceNuxt.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceNuxt.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceNuxt.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Semi-Senior -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceSemiSenior.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceSemiSenior.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceSemiSenior.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- PasarEx -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experiencePasarEx.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experiencePasarEx.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experiencePasarEx.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Laravel Developer -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceLaravel.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceLaravel.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceLaravel.description") }}
            </p>
          </div>
        </div>
      </div>

      <!-- Junior -->
      <div class="mb-10 ms-4 md:ms-0 list-none relative min-h-[100px]">
        <p
          class="leading-5 ml-3 mb-3 text-sm font-bold italic md:ml-0 md:mb-0 md:-start-[130px] md:absolute md:top-0 md:w-[120px] md:text-right md:pr-2 animateLeft__"
        >
          {{ $t("experienceJunior.company") }}
        </p>
        <div
          class="absolute w-3 h-3 bg-customGreen700 rounded-full mt-1.5 -start-1.5 border border-black dark:border-white z-10"
        >
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-customGreen600 opacity-75"
          ></span>
        </div>
        <div class="md:ms-4">
          <h3 class="sm:ms-4 md:ms-0 text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t("experienceJunior.title") }}
          </h3>
          <div class="mb-4 text-base font-normal text-black dark:text-gray-950">
            <p class="animateRight__">
              {{ $t("experienceJunior.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
