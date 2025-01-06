<template>
  <main
    class="w-[97%] lg:w-[82%] h-[96%] lg:h-[95%] bg-gray-100 dark:bg-gray-400 rounded-2xl lg:mr-5 overflow-hidden grid grid-rows-[auto_1fr]"
  >
    <UiSubmenu />
    <div class="overflow-y-auto h-full">
      <SectionAbout />
      <SectionExperience />
    </div>
  </main>
</template>

<style scoped>


html {
  scroll-behavior: smooth;
}
</style>
