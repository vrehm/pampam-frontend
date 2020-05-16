<template>
  <div>
    <home-navbar />
    <home-hero />
    <home-newsletter />
    <home-presentation />
    <testimonials />
    <logo-clouds />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import Testimonials from '~/components/Testimonials.vue'
import LogoClouds from '~/components/LogoClouds.vue'

export default {
  components: {
    HomeNavbar,
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    Testimonials,
    LogoClouds
  }
}
</script>

<style></style>
