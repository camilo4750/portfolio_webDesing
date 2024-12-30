<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-gray-300 dark:bg-gray-800 px-5 w-full lg:hidden"
  >
    <div class="flex justify-end py-3 lg:p-3 dark:text-white">
      <UiSidebarToggle />
    </div>
    <SidebarMenu />
  </div>
  <div
    class="hidden side-menu lg:w-[25%] xl:w-[27%] 2xl:w-[22%] h-full lg:py-5 xl:py-14 px-2 md:px-5 lg:px-5 xl:px-10 lg:flex overflow-y-auto"
  >
    <SidebarMenu />
  </div>
</template>

<script setup lang="ts">
import { useSidebarState } from "@/composables/useSidebarState";

const { isOpen } = useSidebarState();
</script>

<style>
@media screen and (max-width: 1488px) {
  /* .side-menu {
    width: 30%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  } */
}
</style>
