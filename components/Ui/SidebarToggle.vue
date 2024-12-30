<template>
  <div>
    <button
      @click="toggleSidebar"
      class="p-1 flex items-center justify-center rounded-md lg:hidden"
    >
      <Icon v-if="isOpen" name="material-symbols:close-rounded" size="30" />
      <Icon v-else name="material-symbols:menu-rounded" size="23" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSidebarState } from "@/composables/useSidebarState";

const { toggleSidebar, isOpen } = useSidebarState();
</script>

<style scoped></style>
