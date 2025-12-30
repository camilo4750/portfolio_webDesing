<template>
  <header class="px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col w-full">
    <div class="flex flex-col justify-center items-center">
      <div
        class="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-800 dark:bg-white flex justify-center items-center"
      >
        <Icon
          class="text-white dark:text-black sm:w-10 sm:h-10"
          name="material-symbols:fingerprint"
          size="32"
        />
      </div>
      <h1 class="pt-2 text-lg sm:text-xl font-bold text-dark dark:text-white">
        WitCamDev
      </h1>
    </div>

    <nav>
      <ul class="mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-5 xl:space-y-7 2xl:space-y-10">
        <li
          :class="[
            'group h-14 sm:h-16 lg:h-12 xl:h-14 text-base sm:text-lg hover:shadow hover:bg-customGreen200 hover:font-bold dark:text-white dark:hover:text-black transition duration-200 ease-out rounded-2xl flex items-center gap-3 sm:gap-4',
            activeSection === 'about' ? 'active-menu-item' : ''
          ]"
        >
          <a
            href="#about"
            @click="toggleSidebar"
            class="flex items-center gap-3 w-full h-full"
          >
            <span
              :class="[
                'flex justify-center items-center h-full w-12 sm:w-14 lg:w-10 xl:w-12 2xl:w-14 rounded-2xl transition-colors duration-200',
                activeSection === 'about' 
                  ? 'bg-customGreen600 text-white dark:text-black shadow-md' 
                  : 'bg-white dark:bg-customGreen600 dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:bg-customGreen600'
              ]"
            >
              <Icon
                name="material-symbols:person"
                class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
              />
            </span>
            <span :class="activeSection === 'about' ? 'font-bold' : ''">
              {{ $t("menuAbout") }}
            </span>
          </a>
        </li>
        <li
          :class="[
            'group h-14 sm:h-16 lg:h-12 xl:h-14 text-base sm:text-lg hover:shadow hover:bg-customGreen200 hover:font-bold dark:text-white dark:hover:text-black transition duration-200 ease-out rounded-2xl flex items-center gap-3 sm:gap-4',
            activeSection === 'experience' ? 'active-menu-item' : ''
          ]"
        >
          <a
            href="#experience"
            @click="toggleSidebar"
            class="flex items-center gap-3 w-full h-full"
          >
            <span
              :class="[
                'flex justify-center items-center h-full w-12 sm:w-14 lg:w-10 xl:w-12 2xl:w-14 rounded-2xl transition-colors duration-200',
                activeSection === 'experience' 
                  ? 'bg-customGreen600 text-white dark:text-black shadow-md' 
                  : 'bg-white dark:bg-customGreen600 dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:bg-customGreen600'
              ]"
            >
              <Icon
                name="material-symbols:trending-up-rounded"
                class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
              />
            </span>
            <span :class="activeSection === 'experience' ? 'font-bold' : ''">
              {{ $t("menuExperience") }}
            </span>
          </a>
        </li>
        <li
          :class="[
            'group h-14 sm:h-16 lg:h-12 xl:h-14 text-base sm:text-lg hover:shadow hover:bg-customGreen200 hover:font-bold dark:text-white dark:hover:text-black transition duration-200 ease-out rounded-2xl flex items-center gap-3 sm:gap-4',
            activeSection === 'projects' ? 'active-menu-item' : ''
          ]"
        >
          <a
            href="#projects"
            @click="toggleSidebar"
            class="flex items-center gap-3 w-full h-full"
          >
            <span
              :class="[
                'flex justify-center items-center h-full w-12 sm:w-14 lg:w-10 xl:w-12 2xl:w-14 rounded-2xl transition-colors duration-200',
                activeSection === 'projects' 
                  ? 'bg-customGreen600 text-white dark:text-black shadow-md' 
                  : 'bg-white dark:bg-customGreen600 dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:bg-customGreen600'
              ]"
            >
              <Icon
                name="material-symbols:folder-data-rounded"
                class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
              />
            </span>
            <span :class="activeSection === 'projects' ? 'font-bold' : ''">
              {{ $t("menuProject") }}
            </span>
          </a>
        </li>
        <li
          :class="[
            'group h-14 sm:h-16 lg:h-12 xl:h-14 text-base sm:text-lg hover:shadow hover:bg-customGreen200 hover:font-bold dark:text-white dark:hover:text-black transition duration-200 ease-out rounded-2xl flex items-center gap-3 sm:gap-4',
            activeSection === 'contacts' ? 'active-menu-item' : ''
          ]"
        >
          <a
            href="#contacts"
            @click="toggleSidebar"
            class="flex items-center gap-3 w-full h-full"
          >
            <span
              :class="[
                'flex justify-center items-center h-full w-12 sm:w-14 lg:w-10 xl:w-12 2xl:w-14 rounded-2xl transition-colors duration-200',
                activeSection === 'contacts' 
                  ? 'bg-customGreen600 text-white dark:text-black shadow-md' 
                  : 'bg-white dark:bg-customGreen600 dark:text-white group-hover:text-white dark:group-hover:text-black group-hover:bg-customGreen600'
              ]"
            >
              <Icon
                name="material-symbols:mark-email-unread"
                class="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
              />
            </span>
            <span :class="activeSection === 'contacts' ? 'font-bold' : ''">
              {{ $t("menuContact") }}
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <footer
      class="bg-white dark:bg-customGreen600 rounded-2xl p-4 sm:p-5 xl:p-3 shadow-lg text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 hidden xl:block"
    >
      <h1
        class="text-base sm:text-lg xl:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customGreen950 via-customGreen600 to-customGreen400 dark:from-white dark:via-slate-300 dark:to-white"
      >
        {{ $t("footerNav") }}
      </h1>
    </footer>
  </header>
</template>

<script setup lang="ts">
const { toggleSidebar } = useSidebarState();
const { activeSection } = useActiveSection();
</script>

<style scoped>
.active-menu-item {
  background-color: rgb(34 197 94 / 0.15);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.dark .active-menu-item {
  background-color: rgb(34 197 94 / 0.25);
}
</style>