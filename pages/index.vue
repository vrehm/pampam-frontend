<template>
  <div>
    <home-navbar />
    <home-hero-section />
    <home-newsletter-section />
    <feature-section />
    <testimonials />
    <logo-clouds />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
import HomeHeroSection from '~/components/HomeHeroSection.vue'
import HomeNewsletterSection from '~/components/HomeNewsletterSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import Testimonials from '~/components/Testimonials.vue'
import LogoClouds from '~/components/LogoClouds.vue'

export default {
  components: {
    HomeNavbar,
    HomeHeroSection,
    HomeNewsletterSection,
    FeatureSection,
    Testimonials,
    LogoClouds,
  },
}
</script>

<style></style>
