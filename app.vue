<template>
  <div class="font-roboto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "WitCamDev",
  meta: [{ name: "description", content: "personal portfolio" }],
});
</script>
