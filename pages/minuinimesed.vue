<script setup>
  import { InformationCircleIcon } from '@heroicons/vue/24/outline';

  // peidab ja näitab info div-i
  const showInfo = ref(false);
  
  const toggleInfo = () => {
    showInfo.value = !showInfo.value;
  };
</script>

<template>
  <div>
            
      <!-- info nupp -->
      <button class="py-2 px-4" @click="toggleInfo()">
        <InformationCircleIcon class="h-6 text-gray-400" />
      </button>

      <!-- info div -->
      <div v-if="showInfo" class="text-sm border-gray-100 border-1 px-4 py-2 shadow rounded">
        <p>Mingi info on siin kirjas, mida me tahame kasutajale näidata</p>
      </div>
  </div>

</template>



<style>

</style>