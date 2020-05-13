<template>
  <div>
    <navbar />
    <!-- <hero-section /> -->
    <newsletter-section />
    <feature-section />
    <testimonials />
    <logo-clouds />
    <footer-section />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
// import HeroSection from '~/components/HeroSection.vue'
import NewsletterSection from '~/components/NewsletterSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import Testimonials from '~/components/Testimonials.vue'
import LogoClouds from '~/components/LogoClouds.vue'
export default {
  components: {
    Navbar,
    // HeroSection,
    NewsletterSection,
    FooterSection,
    FeatureSection,
    Testimonials,
    LogoClouds
  }
}
</script>

<style></style>
