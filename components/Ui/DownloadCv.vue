<script setup>
const { locale } = useI18n();

const currentLocale = computed(() => locale.value);
</script>

<template>
  <a
    :href="currentLocale === 'es' ? '/CamiloAlarcon_DesarrolladorSofware.pdf' : 'CamiloAlarcon_SoftwareDeveloper.pdf'"
    download
    class="bg-[#c79825] hover:bg-[#d29b17] text-white flex items-center justify-center gap-2 font-semibold max-w-[180px] rounded-full py-1.5 px-4 shadow hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-110"
  >
    {{ $t("textBntCv") }}
  </a>
</template>
