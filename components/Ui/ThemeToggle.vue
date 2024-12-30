<template>
  <button
    class="p-1 inline-flex items-center rounded-md hover:bg-gray-300 dark:hover:bg-gray-800"
    @click="toggleTheme"
  >
    <Icon v-if="enabled" name="material-symbols:nightlight-outline" size="23" />
    <Icon v-else name="material-symbols-light:light-mode" size="23" class="text-yellow-600"/>
  </button>
</template>

<script setup alang="ts">
useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});

const { enabled, toggleTheme } = useTheme();
</script>
