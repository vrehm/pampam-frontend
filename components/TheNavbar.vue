<template>
  <section class="w-full bg-yellow-100">
    <!-- desktop version -->

    <!-- Version with position absolute, over the background -->
    <div v-if="useAbsoluteVersion" :class="{ 'md:bg-white md:shadow-lg': !heroVisibility }" class="md:fixed absolute z-20 top-0 left-0 right-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center md:items-start py-6 md:space-x-10">
          <nuxt-link to="/">
            <img :class="{ 'w-24 md:w-32 lg:w-48': heroVisibility, 'md:fixed w-24 md:w-20': !heroVisibility }" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
          </nuxt-link>
          <div class="-mr-2 -my-2 md:hidden fixed right-0 top-0 pt-12 pr-6">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out" @click.prevent="mobileNavOpen = !mobileNavOpen">
              <svg class="h-8 w-8 bg-gray-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex md:space-x-5 lg:space-x-10">
            <nuxt-link v-for="item in menuItems" :key="item.name" :to="{ path: item.path, hash: item.hash }" :class="{ 'flying-menu-links': !heroVisibility, 'menu-links-transparent': heroVisibility }" class="md:text-sm lg:text-base leading-6 font-medium hover:text-orange-300 focus:outline-none focus:text-orange-300 transition ease-in-out duration-150">
              {{ item.name }}
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>

    <!-- Version with position relative -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 w-full">
      <div :class="{ 'md:bg-white': !nonHomeHeroVisibility }" class="md:fixed md:z-20 flex flex-1 md:w-1/2 justify-between items-center md:items-start py-6 md:space-x-10">
        <nuxt-link to="/">
          <img :class="{ 'w-24 md:w-32 lg:w-48': nonHomeHeroVisibility, 'md:fixed md:w-20': !nonHomeHeroVisibility }" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
        </nuxt-link>
        <div class="-mr-2 -my-2 md:hidden fixed right-0 top-0 pt-12 pr-6">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out" @click.prevent="mobileNavOpen = !mobileNavOpen">
            <svg class="h-8 w-8 bg-gray-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex md:space-x-5 lg:space-x-10">
          <nuxt-link v-for="item in menuItems" :key="item.name" :to="{ path: item.path, hash: item.hash }" class="text-base leading-6 font-medium text-gray-900 hover:text-orange-300 transition ease-in-out duration-150">
            {{ item.name }}
          </nuxt-link>
        </nav>
      </div>
    </div>

    <!-- Mobile version -->
    <transition name="fade" enter-active-class="duration-200 ease-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-show="mobileNavOpen" v-click-outside="closeMobileNavbar" class="fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white">
            <div class="pt-5 pb-6 px-5 space-y-8">
              <div class="flex items-center justify-between">
                <nuxt-link to="/">
                  <img class="w-24" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
                </nuxt-link>

                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out" @click.prevent="mobileNavOpen = !mobileNavOpen">
                    <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <nav class="grid row-gap-8">
                <nuxt-link v-for="item in menuItems" :key="item.name" :to="{ path: item.path, hash: item.hash }" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="text-base leading-6 font-medium text-orange-400">
                    {{ item.name }}
                  </div>
                </nuxt-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    useAbsoluteVersion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Who is Pam Pam',
          hash: 'who-is-pampam',
          path: '/'
        },
        {
          name: 'La Boutique',
          hash: 'la-boutique',
          path: '/'
        },
        {
          name: " L'Atelier",
          hash: 'l-atelier',
          path: '/'
        },
        {
          name: 'Côté Pro',
          hash: '',
          path: '/cote-pro'
        },
        {
          name: 'Journal',
          hash: '',
          path: '/journal'
        }
      ],
      routeChange: false,
      mobileNavOpen: false,
      heroVisibility: true,
      coteProHeroVisibility: false,
      journalHeroVisibility: false
    }
  },
  computed: {
    nonHomeHeroVisibility() {
      return this.coteProHeroVisibility || this.journalHeroVisibility
    }
  },
  watch: {
    $route(data) {
      const { name } = data
      this.routeChange = true
      this.mobileNavOpen = false

      switch (name) {
        case 'index':
          this.journalHeroVisibility = false
          this.coteProHeroVisibility = false
          break
        case 'cote-pro':
          this.heroVisibility = false
          this.journalHeroVisibility = false
          this.coteProHeroVisibility = true
          break
        case 'journal':
          this.heroVisibility = false
          this.journalHeroVisibility = true
          this.coteProHeroVisibility = false
          break
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('touchmove', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('touchmove', this.handleScroll)
  },
  mounted() {
    this.$nuxt.$on('home-hero-invisible', (payload) => {
      this.heroVisibility = payload
    })
    this.$nuxt.$on('journal-hero-invisible', (payload) => {
      this.journalHeroVisibility = payload
    })
    this.$nuxt.$on('cote-pro-hero-invisible', (payload) => {
      this.coteProHeroVisibility = payload
    })
  },
  methods: {
    closeMobileNavbar() {
      this.mobileNavOpen = false
    },
    handleScroll() {
      // actions on scroll or touchmove events
      if (window.scrollY > 200) {
        this.closeMobileNavbar()
      }
    }
  }
}
</script>

<style>
.menu-links-transparent {
  @apply text-gray-100;
}

.flying-menu-links {
  @apply text-gray-900;
}
</style>
