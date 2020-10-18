<template>
  <div class="max-w-full h-full flex-1">
    <the-nav-bar :use-absolute-version="isAbsolute" />
    <nuxt id="content" keep-alive />
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
  },
  computed: {
    isAbsolute() {
      return this.$route.name === 'index' || this.$route.name === 'index-legacy'
    }
  }
}
</script>

<style>
html {
  @apply h-full;
}

body {
  @apply h-full font-blur bg-yellow-100;
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
