<template>
  <div>
    <home-navbar />
    <!-- <hero-section /> -->
    <newsletter-section />
    <feature-section />
    <testimonials />
    <logo-clouds />
  </div>
</template>

<script>
import HomeNavbar from '~/components/HomeNavbar.vue'
// import HeroSection from '~/components/HeroSection.vue'
import NewsletterSection from '~/components/NewsletterSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import Testimonials from '~/components/Testimonials.vue'
import LogoClouds from '~/components/LogoClouds.vue'
export default {
  components: {
    HomeNavbar,
    // HeroSection,
    NewsletterSection,
    FeatureSection,
    Testimonials,
    LogoClouds
  }
}
</script>

<style></style>
