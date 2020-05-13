<template>
  <div class="max-w-full">
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheFooter
  }
}
</script>

<style>
html {
  @apply h-full;
}

body {
  @apply h-full;
}

#__nuxt {
  @apply h-full;
}

#__layout {
  @apply h-full flex flex-col;
}
</style>
