<template>
  <div class="max-w-full h-full flex-1">
    <nuxt id="content" />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheFooter,
  },
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

#content {
  min-height: 60vh;
}
</style>
