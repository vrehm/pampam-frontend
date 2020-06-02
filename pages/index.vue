<template>
  <div>
    <home-hero />
    <home-newsletter />
    <home-presentation id="who-is-pampam" />
    <home-insta-grid id="la-boutique" :posts="posts.slice(0, 9)" />
    <home-atelier id="l-atelier" />
    <home-showroom />
    <testimonials />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import HomeInstaGrid from '~/components/HomeInstaGrid.vue'
import HomeAtelier from '~/components/HomeAtelier.vue'
import HomeShowroom from '~/components/HomeShowroom.vue'
import Testimonials from '~/components/Testimonials.vue'

export default {
  components: {
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    HomeInstaGrid,
    HomeAtelier,
    HomeShowroom,
    Testimonials
  },
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const posts = await $axios.$get(baseURL + '/instagram-posts?_sort=id:ASC')
    return { posts }
  }
}
</script>

<style></style>
