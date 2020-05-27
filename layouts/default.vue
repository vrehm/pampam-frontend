<template>
  <div class="max-w-full h-full flex-1">
    <the-nav-bar :use-homepage-theme="isHomepage" />
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
  },
  computed: {
    isHomepage() {
      return this.$route.name === 'index' || this.$route.name === 'cote-pro'
    }
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
