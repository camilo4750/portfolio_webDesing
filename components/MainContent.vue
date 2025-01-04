<template>
  <div
    class="w-[97%] lg:w-[82%] h-[96%] lg:h-[95%] bg-gray-100 dark:bg-gray-400 rounded-2xl lg:mr-5 overflow-y-auto flex flex-col"
  >
    <div
      class="sticky w-full h-10 px-1 lg:px-3 lg:p-0 flex justify-end items-center gap-2 top-0 z-10 bg-gray-100 dark:bg-gray-400 border-b"
    >
      <UiLanguageToggle />
      <UiThemeToggle />
      <UiSidebarToggle />
    </div>
    <!-- contenido principal -->
    <main class="h-full">
      <SectionAbout/>
      <!-- Add more sections here as needed -->
    </main>
  </div>
</template>

<style scoped>
section {
  scroll-margin-top: 2.4rem; /* Adjust this value as needed */
}

html {
  scroll-behavior: smooth;
}
</style>
