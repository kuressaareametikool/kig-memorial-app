<script setup lang="ts">
const tyyp = ref(true);

const toggleType = (val) => {
  tyyp.value = val;
};
</script>
<template>
  <div class="flex-1 flex justify-center">
    <div class="h-10 flex items-center bg-gray-100 rounded">
      <BaseButton
        :class="{ 'border border-black bg-cyan-800 text-white': tyyp }"
        @click="toggleType(true)"
      >
        Tuhastamine
      </BaseButton>
      <BaseButton
        :class="{ 'border border-black bg-cyan-800 text-white': !tyyp }"
        @click="toggleType(false)"
      >
        Kirstumatus
      </BaseButton>
    </div>
  </div>
</template>
