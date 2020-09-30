<template>
  <div>
    <home-hero />
    <home-newsletter />
    <home-presentation id="who-is-pampam" />
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
  data() {
    return {
      windowHeight: 0,
      chatEverShowed: false
    }
  },
  mounted() {
    window.$crisp.push(['do', 'chat:hide'])
    this.windowHeight = document.documentElement.clientHeight
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('touchmove', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('touchmove', this.handleScroll)
  },
  methods: {
    handleScroll(el) {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop >= this.windowHeight && !this.chatEverShowed) {
        this.chatEverShowed = true
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
