<template>
  <div class="bg-white min-h-screen flex flex-col">
    
    <div class="p-4 flex-1 flex flex-col">
      <slot></slot>
    </div>

    <div class="h-16 w-full bg-black bg-opacity-50">
      <div class="w-full h-full flex justify-center items-center">
        <div
          class="flex h-full hover:bg-black hover:bg-opacity-30">
          <NuxtLink to="/matusetuup" class="flex items-center px-[4vw] text-white">Matuse viis</NuxtLink>
        </div>
        <div
          class="flex h-full hover:bg-black hover:bg-opacity-30">
          <NuxtLink to="/minuinimesed" class="flex items-center px-[4vw] text-white">Inimesed</NuxtLink>
        </div>
        <div
          class="flex h-full hover:bg-black hover:bg-opacity-30">
          <NuxtLink to="/erisoovid" class="flex items-center px-[4vw] h-full text-white">Erisoovid</NuxtLink>
        </div>
        <div
          class="flex h-full hover:bg-black hover:bg-opacity-30">
          <NuxtLink to="/e-tund" class="flex items-center px-[4vw] h-full text-white">E-tund</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
