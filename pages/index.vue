<template>
  <div>
    <home-hero />
    <home-newsletter />
    <home-presentation
      id="who-is-pampam"
      v-observe-visibility="{
        callback: visibilityChanged,
        once: true
      }"
    />
    <home-insta-grid id="la-boutique" :posts="posts.slice(0, 9)" />
    <home-atelier id="l-atelier" />
    <home-showroom />
    <home-press-and-testimonials />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import HomeInstaGrid from '~/components/HomeInstaGrid.vue'
import HomeAtelier from '~/components/HomeAtelier.vue'
import HomeShowroom from '~/components/HomeShowroom.vue'
import HomePressAndTestimonials from '~/components/HomePressAndTestimonials.vue'

export default {
  components: {
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    HomeInstaGrid,
    HomeAtelier,
    HomeShowroom,
    HomePressAndTestimonials
  },
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const posts = await $axios.$get(baseURL + '/instagram-posts?_sort=timestamp:DESC')
    return { posts }
  },
  mounted() {
    window.$crisp.push(['do', 'chat:hide'])
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        window.$crisp.push(['do', 'chat:show'])
      }
    }
  },
  head() {
    return {
      title: "L'Atelier Pam Pam - Brocante poétique pour intérieurs singuliers."
    }
  }
}
</script>

<style></style>
