<template>
  <div class="md:px-16 lg:px-0 flex flex-col justify-between">
    <!-- Encabezado -->
    <div class="flex flex-col justify-center items-center mt-5">
      <div
        class="h-12 w-12 rounded-lg bg-gray-800 dark:bg-white flex justify-center items-center"
      >
        <Icon
          class="text-white dark:text-black"
          name="material-symbols:fingerprint"
          size="40"
        />
      </div>
      <span class="pt-2 text-lg font-bold text-dark dark:text-white"
        >WitCamDev</span
      >
    </div>

    <!-- Lista de enlaces -->
    <ul class="mt-12 space-y-6">
      <li
        v-for="item in menuItems"
        :key="item.title"
        class="group h-11 xl:h-14 hover:bg-customGreen200 hover:font-bold dark:text-white dark:hover:text-black transition duration-200 ease-out rounded-2xl flex items-center gap-4"
      >
        <a :href="item.href" class="flex items-center gap-4 w-full h-full">
          <span
            class="flex justify-center items-center h-full w-11 xl:w-14 bg-white dark:bg-customGreen600 rounded-2xl group-hover:text-white dark:group-hover:text-black dark:text-white group-hover:bg-customGreen600"
          >
            <Icon :name="item.icon" :size="23" />
          </span>
          {{ item.title }}
        </a>
      </li>
    </ul>

    <!-- Footer -->
    <div
      class="bg-white dark:bg-customGreen600 rounded-2xl p-5 xl:p-4 text-center mt-12"
    >
      <h1
        class="text-lg xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customGreen950 via-customGreen600 to-customGreen400 dark:from-white dark:via-slate-300 dark:to-white"
      >
        Ideas en lógica, soluciones en código.
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItems } from "~/types/MenuItems";

const menuItems: Array<MenuItems> = [
  {
    title: "About",
    icon: "material-symbols:person",
    href: "#about",
  },
  {
    title: "Experience",
    icon: "material-symbols:trending-up-rounded",
    href: "#experience",
  },
  {
    title: "Projects",
    icon: "material-symbols:folder-data-rounded",
    href: "#projects",
  },
  {
    title: "Contacts",
    icon: "material-symbols:mark-email-unread",
    href: "#contacts",
  },
];
</script>
