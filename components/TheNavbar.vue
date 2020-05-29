<template>
  <section class="w-full bg-transparent">
    <!-- desktop version -->

    <div :class="useHomepageTheme && theme">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center md:items-start py-6 md:space-x-10">
          <a href="#">
            <img class="w-24 md:w-32 lg:w-48 lazyload" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
          </a>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out" @click="mobileNavOpen = !mobileNavOpen">
              <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex md:space-x-5 lg:space-x-10">
            <nuxt-link v-for="item in menuItems" :key="item.name" :to="{ path: '/', hash: item.hash }" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              {{ item.name }}
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <!-- Mobile version -->

    <transition name="fade" enter-active-class="duration-200 ease-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-show="mobileNavOpen" v-click-outside="closeMobileNavbar" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white">
            <div class="pt-5 pb-6 px-5 space-y-8">
              <div class="flex items-center justify-between">
                <img class="w-24 lazyload" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out" @click="mobileNavOpen = !mobileNavOpen">
                    <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <nav class="grid row-gap-8">
                <nuxt-link v-for="item in menuItems" :key="item.name" :to="{ path: '/', hash: item.hash }" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                  <div class="text-base leading-6 font-medium text-yellow-600">
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
    useHomepageTheme: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      theme: 'absolute top-0 left-0 right-0',
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
      mobileNavOpen: false
    }
  },
  computed: {
    classObject() {
      return {
        'bg-transparent': this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
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

<style></style>
