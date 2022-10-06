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
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5"></div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Mida teha minu tuhaga?
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Nt: soovin tuhka merre, loodusesse, enda hoovi..."
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
      </form>
    </div>
  </div>

  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[550px]">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5"></div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Platsi nimi ja asukoht
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Siia tuleb tekst"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
