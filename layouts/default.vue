<template>
  <div class="bg-white min-h-screen flex flex-col">
    <div class="p-4 flex-1 flex flex-col">
      <slot></slot>
    </div>

    <div class="h-16 w-full bg-black bg-opacity-50">
      <div class="w-full h-full flex justify-center items-center">
        <div
          class="flex h-full items-center hover:bg-black hover:bg-opacity-50"
        >
          <div class="h-8 w-px bg-cyan-800"></div>
        </div>
        <div
          class="flex h-full items-center hover:bg-black hover:bg-opacity-50"
        >
          <NuxtLink to="/matusetuup" class="mx-4 text-white"
            >Matuse viis</NuxtLink
          >
          <div class="h-8 w-px bg-cyan-800"></div>
        </div>
        <div
          class="flex h-full items-center hover:bg-cyan-800 hover:bg-opacity-50"
        >
          <NuxtLink to="/minuinimesed" class="mx-4 text-white"
            >Minu inimesed</NuxtLink
            >
        <div class="h-8 w-px bg-gray-300"></div>
          </div>
        <div
          class="flex h-full items-center hover:bg-black hover:bg-opacity-50"
        >
          <NuxtLink to="/erisoovid" class="mx-4 text-white"
          >Erisoovid</NuxtLink
          >
        <div class="h-8 w-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>
