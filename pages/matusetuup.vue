<script setup lang="ts">
const tyyp = ref(true);

const toggleType = (val) => {
  tyyp.value = val;
};
</script>
<template>
  <div class="flex-1 flex flex-col justify-center">
    
    <!-- toggle -->
    <div class="h-10 flex items-center rounded">
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

    <!-- kalmistu -->
    <fieldset class="kig-fieldset">
      <label for="cemetary">Kalmistu</label>
      <textarea name="cemetary" rows="4" 
        class="kig-textarea"></textarea>
    </fieldset>

    <fieldset class="kig-fieldset">
      <label for="teine">Teine asi</label>
      <textarea name="teine" rows="4" 
        class="kig-textarea-2"></textarea>
    </fieldset>
    
    <textarea name="cemetary" rows="4" 
        class="kig-textarea"></textarea>
    <textarea name="cemetary" rows="4" 
        class="kig-textarea"></textarea>
    <textarea name="cemetary" rows="4" 
        class="kig-textarea"></textarea>
    <textarea name="cemetary" rows="4" 
        class="kig-textarea"></textarea>

    <!-- <PersonSimple>
        Mati Kuusik
    </PersonSimple>
    <PersonSimple>
        Urve Jalakas-Seenik
    </PersonSimple> -->

  </div>
</template>

<style>
  .kig-textarea {
    @apply border-2 rounded-md border-gray-300 p-2;
  }
  .kig-fieldset {
    @apply flex flex-col gap-1 mt-8;
  }
</style>


