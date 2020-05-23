<template>
  <div>
    <home-navbar />
    <home-hero />
    <home-newsletter />
    <home-presentation id="who-is-pampam" />
    <home-insta-grid id="la-boutique" />
    <testimonials />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import HomeInstaGrid from '~/components/HomeInstaGrid.vue'
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    HomeNavbar,
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    HomeInstaGrid,
    Testimonials
  }
}
</script>

<style></style>
