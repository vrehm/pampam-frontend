<template>
  <div>
    <home-hero
      v-observe-visibility="{
        callback: homeHeroVisibilityChanged
      }"
    />
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
    <home-testimonials />
    <home-presse />
  </div>
</template>

<script>
import HomeHero from '~/components/HomeHero.vue'
import HomeNewsletter from '~/components/HomeNewsletter.vue'
import HomePresentation from '~/components/HomePresentation.vue'
import HomeInstaGrid from '~/components/HomeInstaGrid.vue'
import HomeAtelier from '~/components/HomeAtelier.vue'
import HomeShowroom from '~/components/HomeShowroom.vue'
import HomeTestimonials from '~/components/HomeTestimonials.vue'
import HomePresse from '~/components/HomePresse.vue'

export default {
  components: {
    HomeHero,
    HomeNewsletter,
    HomePresentation,
    HomeInstaGrid,
    HomeAtelier,
    HomeShowroom,
    HomeTestimonials,
    HomePresse
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
    },
    homeHeroVisibilityChanged(isVisible) {
      this.$nuxt.$emit('home-hero-invisible', isVisible)
    }
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://atelierpampam.fr/',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Les Puces du Canal, 3 Rue Eugène Pottier',
              addressLocality: 'Villeurbanne',
              postalCode: '69100',
              addressCountry: 'FR'
            },
            name: 'Atelier Pam Pam',
            description: "À l'Atelier Pam Pam vous trouverez des pièces uniques, des créations d'ameublement, de luminaires, de meubles et des objets variés retravaillés.",
            url: 'https://atelierpampam.fr/'
          }),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style></style>
