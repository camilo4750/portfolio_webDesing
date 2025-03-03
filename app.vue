<template>
  <div class="font-roboto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { $scrollEffects } = useNuxtApp();

useHead({
  title: "WitCamDev",
  meta: [{ name: "description", content: "personal portfolio" }],
});

onMounted(() => {
  new $scrollEffects({
    selector: ".animateLeft__",
    origin: "left",
    distance: "80px",
    duration: 2500,
    delay: 500,
  });

  new $scrollEffects({
    selector: ".animateRight__",
    origin: "right",
    distance: "80px",
    duration: 2500,
    delay: 500,
  });
});
</script>
