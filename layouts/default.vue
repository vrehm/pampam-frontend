<template>
  <div class="max-w-full h-full flex-1">
    <the-nav-bar v-if="['index'].indexOf($route.name)" />
    <nuxt id="content" />
    <the-footer />
  </div>
</template>

<script>
import TheNavBar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheNavBar,
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

#content {
  min-height: 60vh;
}
</style>
