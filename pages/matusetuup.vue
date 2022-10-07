<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

// peidab ja näitab info div-i
const showInfo = ref(false);

const toggleInfo = () => {
  showInfo.value = !showInfo.value;
};
const tyyp = ref(true);

const toggleType = (val) => {
  tyyp.value = val;
};
</script>
<template>
  <div class="flex-1 flex justify-center pt-10">
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
  <div class="flex items-center justify-center px-5 pt-6">
    <div class="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5"></div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Kalmistu asukoht
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Lisa ka hauaplatsi asukoht"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
      </form>
    </div>
  </div>

  <button class="flex py-2 px-4 justify-end" @click="toggleInfo()">
    <InformationCircleIcon class="text-gray-400 h-6" />
  </button>

  <!-- info div -->
  <div
    v-if="showInfo"
    class="text-sm border-grey-100 border-1 px-4 py-2 shadow rounded"
  >
    <p>
      Kirjuta siia kuhu soovid tuha puistada. Nt: loodusesse, õunapuu alla..
    </p>
  </div>

  <div class="flex items-center justify-center px-5 pb-10">
    <div class="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5"></div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Mida teha tuhaga?
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder=""
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
