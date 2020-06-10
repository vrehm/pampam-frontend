<template>
  <div class="pb-16 sm:px-6 md:px-24 md:max-w-screen-xl text-center">
    <div class="mt-3 text-sm leading-5">
      <button class="font-medium text-yellow-600 hover:text-yellow-500 transition ease-in-out duration-150" :click="$emit('load-articles')">
        Charger plus d'articles &rarr;
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
