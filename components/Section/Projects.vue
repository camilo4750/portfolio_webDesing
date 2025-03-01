<script setup lang="ts"></script>

<template>
  <section
    class="min-h-full flex flex-col justify-center items-center p-5"
    id="projects"
  >
    <div class="py-4 text-center w-[80%]">
      <h2 class="font-bold text-4xl md:text-5xl font-quantico mb-2 ">
        {{ $t("projects.title") }}
      </h2>
      <p>
        {{ $t("projects.description") }}
      </p>
    </div>
    <div class="w-full 2xl:w-[80%] mx-auto">
      <UiSwiper>
        <UiSwiperCard
          :title="$t('projects.projectOne.title')"
          :technologies="[
            'Laravel',
            'Vue',
            'Docker',
            'Html',
            'Css',
            'Bootstrap',
          ]"
          :description="$t('projects.projectOne.description')"
          img="/img/workShop.jpg"
          repositoryUrl="https://github.com/camilo4750/db_workshop_sre"
        />
        <UiSwiperCard
          :title="$t('projects.projectTwo.title')"
          :technologies="['Laravel', 'Docker', 'PostgreSql']"
          :description="$t('projects.projectTwo.description')"
          img="/img/MerWorkShop.jpg"
          repositoryUrl="https://github.com/camilo4750/db_workshop_sre"
        />
        <UiSwiperCard
          :title="$t('projects.projectThree.title')"
          :technologies="['Nuxt', 'NuxtUI', 'Tailwind', 'TypeScript', 'JWT']"
          :description="$t('projects.projectThree.description')"
          img="/img/dummyApi.jpg"
          repositoryUrl="https://github.com/camilo4750/fontend-dummy"
          page-url="https://dummapi.netlify.app/"
        />
        <UiSwiperCard
          :title="$t('projects.projectFour.title')"
          :technologies="['Html', 'Tailwind']"
          :description="$t('projects.projectFour.description')"
          img="/img/interno.jpg"
          repositoryUrl="https://github.com/camilo4750/Interno"
          page-url="https://internoservice.netlify.app/"
        />
        <UiSwiperCard
          :title="$t('projects.projectFive.title')"
          :technologies="['Html', 'Css', 'Bootstrap']"
          :description="$t('projects.projectFive.description')"
          img="/img/compumedica.jpg"
          repositoryUrl="https://github.com/camilo4750/compumedica_webDesign"
          page-url="https://compumedica.netlify.app/"
        />
      </UiSwiper>
    </div>
  </section>
</template>

<style>
.swiper-slide {
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  width: 350px;
  border-radius: 1rem;
}
</style>
