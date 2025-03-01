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

onMounted(() => {
  if (typeof window !== "undefined" && typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "left",
      distance: "60px",
      duration: 2000,
      delay: 300,
    })

    sr.reveal('.animatedLeft__');
    sr.reveal('.animatedRigth__', { origin: "rigth" })
  }
  
});
</script>
