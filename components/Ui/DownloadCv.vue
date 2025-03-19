<script setup>
const { locale } = useI18n();

const href = computed(() => {
  return locale.value === "es"
    ? "/CV_Camilo_Alarcon_Desarrollador_Software.pdf"
    : "/Camilo_Alarcon_Software_Developer_EN.pdf";
});
</script>

<template>
  <a
    :href="href"
    download
    class="bg-[#c79825] hover:bg-[#d29b17] text-white flex items-center justify-center gap-2 font-semibold max-w-[180px] rounded-full py-1.5 px-4 shadow hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110"
  >
    {{ $t("textBntCv") }}
  </a>
</template>
