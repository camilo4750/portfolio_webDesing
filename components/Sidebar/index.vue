<template>
  <Transition name="sidebar">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-gray-300 dark:bg-gray-800 px-5 w-full lg:hidden"
    >
      <div class="flex justify-end py-3 lg:p-3 dark:text-white">
        <UiSidebarToggle />
      </div>
      <SidebarMenu />
    </div>
  </Transition>
  <div
    class="hidden side-menu lg:w-[25%] xl:w-[24%] 2xl:w-[20%] h-full lg:py-5 xl:py-14 px-5 lg:px-5 xl:px-10 lg:flex items-center overflow-y-auto"
  >
    <SidebarMenu />
  </div>
</template>

<script setup lang="ts">
import { useSidebarState } from "@/composables/useSidebarState";

const { isOpen } = useSidebarState();
</script>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.3s ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(-60%);
}
</style>
