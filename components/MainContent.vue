<template>
  <main
    class="w-[97%] lg:w-[82%] h-[96%] lg:h-[95%] bg-gray-100 dark:bg-gray-400 rounded-2xl lg:mr-5 overflow-hidden grid grid-rows-[auto_1fr]"
  >
    <UiSubmenu />
    <div id="scroll-container" class="overflow-y-auto  overflow-x-hidden h-full custom-scroll">
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
      <SectionContact />
    </div>
  </main>
</template>

<style scoped>
.custom-scroll{
  scroll-behavior: smooth;
}

.custom-scroll::-webkit-scrollbar {
  width: 9px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: #fff;
  box-shadow: inset 0 0 5px grey;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #247d77;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #216460;
}
</style>
