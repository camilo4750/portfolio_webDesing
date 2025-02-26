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
  <div class="swiper-slide justify-center">
    <div
      class="card w-[85%] md:w-full block bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-md shadow-customGreen800 dark:shadow-customGreen400"
    >
      <div class="h-[200px] rounded-t-2xl">
        <img
          :src="props.img"
          :alt="props.title"
          class="w-full h-[200px] rounded-t-2xl"
        />
      </div>
      <div class="py-3 px-4 flex flex-col justify-between space-y-2 h-[300px]">
        <h3 class="font-semibold text-lg text-black dark:text-white">
          {{ props.title }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <div
            v-for="technology in props.technologies"
            :key="technology"
            class="border text-sm font-normal bg-gray-300 dark:bg-gray-950 dark:text-white border-customGreen800 dark:border-customGreen400 rounded-full px-3"
          >
            {{ technology }}
          </div>
        </div>
        <p class="h-[200px] md:h-[150px] text-sm text-black dark:text-white">
          {{ props.description }}
        </p>
        <div class="flex justify-end gap-2">
          <a
            v-if="props.repositoryUrl"
            :href="props.repositoryUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 px-4 py-1 hover:shadow-lg hover:dark:bg-customGreen700 hover:dark:text-white transition delay-100 duration-200 ease-in-out hover:bg-customGreen400 bg-customGreen800 dark:bg-customGreen400 text-white dark:text-black text-sm font-medium border border-customGreen500 dark:border-customGreen100 rounded-full"
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
  </div>
</template>
