<template>
  <div
    class="h-dvh w-full bg-slate-100 dark:bg-black overflow-x-hidden overflow-y-auto flex justify-center items-center p-0"
  >
    <div
      class="h-dvh w-full lg:h-[96%] lg:w-[98%] lg:rounded-2xl bg-gray-300 dark:dark:bg-gray-800 flex flex-col lg:flex-row justify-center items-center"
    > 
      <!-- Menú lateral -->
      <Sidebar />

      <!-- Contenido principal -->
      <MainContent />
    </div>
  </div>
</template>
<style scoped>
</style>