<template>
  <div id="texture" class="bg-cover bg-center h-96 z-0 lazyload"></div>
</template>

<script>
export default {}
</script>

<style>
#texture {
  mask-image: radial-gradient(farthest-side, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background-image: url('~assets/img/cote-pro/pattern-wall.jpg');
}
</style>
