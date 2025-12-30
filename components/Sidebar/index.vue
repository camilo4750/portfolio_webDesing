<template>
  <!-- Overlay para móvil -->
  <Transition name="overlay">
    <div
      v-if="isOpen"
      @click="toggleSidebar"
      class="fixed inset-0 z-40 bg-black/50 lg:hidden"
    ></div>
  </Transition>

  <!-- Sidebar móvil -->
  <Transition name="sidebar">
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 z-50 h-full w-[60%] max-w-sm bg-gray-300 dark:bg-gray-800 px-4 sm:px-5 lg:hidden overflow-y-auto shadow-xl"
    >
      <div class="flex justify-end py-3 lg:p-3 dark:text-white">
        <UiSidebarToggle />
      </div>
      <SidebarMenu />
    </div>
  </Transition>

  <!-- Sidebar desktop -->
  <div
    class="hidden lg:flex side-menu w-[20%] h-full p-5 items-center overflow-y-auto"
  >
    <SidebarMenu />
  </div>
</template>

<script setup lang="ts">
import { useSidebarState } from "@/composables/useSidebarState";

const { isOpen, toggleSidebar } = useSidebarState();
</script>

<style scoped>
/* Animación del overlay */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Animación del sidebar */
.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.3s ease-in-out;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
}
</style>