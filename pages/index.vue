<template>
  <div>
    <home-hero />
    <home-newsletter />
    <home-presentation id="who-is-pampam" />
    <home-insta-grid id="la-boutique" />
    <home-atelier id="l-atelier" />
    <testimonials />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import HomeInstaGrid from '~/components/HomeInstaGrid.vue'
import HomeAtelier from '~/components/HomeAtelier.vue'
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    HomeInstaGrid,
    HomeAtelier,
    Testimonials
  }
}
</script>

<style></style>
