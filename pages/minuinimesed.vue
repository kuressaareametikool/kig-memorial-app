<template>
  <h3 class="text-center font-semibold text-lg">
    Minu inimesed
  </h3>
  <div class="flex flex-col justify-center">
    <div class="flex items-center justify-center p-7">
      <div class="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div class="mb-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nimi"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-1">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-1">
            <input
              type="text"
              name="telefon"
              id="telefon"
              placeholder="Telefon"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-1">
            <textarea
              rows="4"
              name="kommentaar"
              id="kommentaar"
              placeholder="Kommentaar"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div class="flex justify-center">
            <div class="flex flex-col gap-10 mb-4">
              <NuxtLink
                to="/"
                class="text-center bg-cyan-800 text-white rounded px-4 py-2"
                >Lisa kontakt</NuxtLink
              >
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="flex flex-col px-7">
      <button class="flex py-2 px-2 justify-end" @click="toggleInfo()">
        <InformationCircleIcon class="text-gray-400 h-6" />
      </button>
      <div v-if="showInfo" class="text- sm border-gray-100 border-1 px-4 py-2 shadow rounded">
      <p> M??rgi oma usaldusisik, kellele saadetakse sinu memo peale sinu lahkumist.</p>
      </div>

      <PersonSimple> Malle Iik </PersonSimple>
      <PersonSimple> Kalle Jaam </PersonSimple>
      <PersonSimple> Emma Kukk </PersonSimple>
      <PersonSimple> Karmo Kallas </PersonSimple>
      <PersonSimple> Maria Paap </PersonSimple>
      <PersonSimple> Ivar Laipaik </PersonSimple>
      <PersonSimple> Maimu Sai </PersonSimple>
    </div>
  </div>
</template>

<script setup>
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const showInfo = ref(false);

const toggleInfo = () => {
  showInfo.value = !showInfo.value;
};
</script>
