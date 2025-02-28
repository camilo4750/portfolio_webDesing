<template>
  <label for="language">
    <span class="sr-only">select language</span>
    <select
      name="language"
      id="language"
      class="text-xs p-1 rounded bg-slate-300 dark:bg-slate-700 dark:text-white"
      v-model="value"
    >
      <option value="es">{{ $t("selectSpanish") }}</option>
      <option value="en">{{ $t("selectEnglish") }}</option>
    </select>
  </label>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

const value = computed({
  get: () => locale.value,
  set: (newValue) => {
    setLocale(newValue);
  },
});
</script>
