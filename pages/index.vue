<script setup lang="ts">
definePageMeta({
  layout: "home",
});
</script>
<template>
  <div class="flex-1 flex justify-center items-end bg-home bg-cover bg-center">
    <div class="flex flex-col gap-10 mb-24">
      <NuxtLink
        to="/"
        class="text-center bg-cyan-800 text-white rounded px-4 py-2"
        >Esileht</NuxtLink
      >
      <NuxtLink
        to="/matusetuup"
        class="text-center bg-cyan-800 text-white rounded px-4 py-2"
        >Matusetüüp</NuxtLink
      >
      <NuxtLink
        to="/tuhastamine"
        class="text-center bg-cyan-800 text-white rounded px-4 py-2"
        >Tuhastamine</NuxtLink
      >
    </div>
  </div>
</template>
