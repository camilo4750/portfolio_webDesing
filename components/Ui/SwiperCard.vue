<script setup lang="ts">
interface Props {
  title: string;
  technologies: string[];
  description: string;
  img: string;
  repositoryUrl?: string;
  pageUrl?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="swiper-slide">
    <div
      class="w-[85%] md:w-full h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-md shadow-customGreen800 dark:shadow-customGreen400"
    >
      <div class="h-[200px] rounded-t-2xl">
        <img
          :src="props.img"
          :alt="props.title"
          class="w-full max-h-[200px] object-cover rounded-t-2xl"
        />
      </div>
      <div class="px-3">
        <h3
          class="font-semibold leading-5 text-lg text-black dark:text-white mt-3"
        >
          {{ props.title }}
        </h3>
        <div class="flex flex-wrap gap-1 my-3">
          <div
            v-for="technology in props.technologies"
            :key="technology"
            class="border text-sm font-normal bg-gray-300 dark:bg-gray-950 dark:text-white border-customGreen800 dark:border-customGreen400 rounded-full px-3"
          >
            {{ technology }}
          </div>
        </div>
        <p class="text-sm text-black dark:text-white my-2">
          {{ props.description }}
        </p>
      </div>
      <div class="flex justify-end gap-1 md:gap-2 mt-auto px-3 py-2">
        <a
          v-if="props.repositoryUrl"
          :href="props.repositoryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-3 py-1 hover:shadow-lg hover:dark:bg-customGreen700 hover:dark:text-white transition delay-100 duration-200 ease-in-out hover:bg-customGreen400 bg-customGreen800 dark:bg-customGreen400 text-white dark:text-black text-sm font-medium border border-customGreen500 dark:border-customGreen100 rounded-full"
        >
          <span class="text-xs md:text-md">{{
            $t("projects.titleBtnRepo")
          }}</span>

          <Icon name="octicon:mark-github-24" size="18" />
        </a>
        <a
          v-if="props.pageUrl"
          :href="props.pageUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 px-4 py-1 hover:shadow-lg hover:dark:bg-customGreen700 hover:dark:text-white transition delay-100 duration-200 ease-in-out hover:bg-customGreen400 bg-customGreen800 dark:bg-customGreen400 text-white dark:text-black text-sm font-medium border border-customGreen500 dark:border-customGreen100 rounded-full"
        >
          <span class="text-xs md:text-md">{{
            $t("projects.titleBtnDemo")
          }}</span>
          <Icon name="material-symbols:open-in-new" size="18" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  justify-content: center;
  height: 555px;
}
</style>
