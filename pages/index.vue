<template>
  <div>
    <home-navbar />
    <home-hero />
    <home-newsletter />
    <home-presentation />
    <logo-clouds />
    <testimonials />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import LogoClouds from '~/components/LogoClouds.vue'
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    HomeNavbar,
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    LogoClouds,
    Testimonials
  }
}
</script>

<style></style>
