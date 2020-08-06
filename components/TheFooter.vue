<template>
  <footer class="bg-yellow-100">
    <div class="w-full pt-12 lg:pt-16 pb-4 lg:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div class="max-w-screen-xl mx-auto md:grid md:grid-cols-3 md:gap-8">
        <div class="flex flex-col items-center">
          <nuxt-link to="/">
            <img class="h-20 lazyload" data-src="~/assets/img/logos/pampam-logo.svg" alt="Company name" />
          </nuxt-link>

          <ul class="flex flex-col items-center mt-6">
            <li v-for="item in menuItems" :key="item.name" class="mt-2">
              <nuxt-link :to="{ path: item.path, hash: item.hash }" class="text-base leading-6 text-gray-900 hover:text-orange-300 transition duration-200 ease-in-out">
                {{ item.name }}
              </nuxt-link>
            </li>

            <li class="mt-2">
              <nuxt-link :to="{ name: 'articles-article', params: { article: 'mentions-legales' } }" class="text-base leading-6 text-gray-900 hover:text-orange-300">
                Mentions Légales
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="mt-12 flex flex-col items-center md:mt-8">
          <p class="text-2xl leading-5  tracking-wider text-yellow-500 font-headings">
            Mon Atelier &amp; Boutique
          </p>
          <p class="mt-6 text-center text-gray-900 text-base leading-6 font-light">
            Les Puces du Canal<br />
            3 Rue Eugène Pottier, 69100 Villeurbanne
          </p>
          <!-- <div class="flex justify-center items-center mt-6 md:mt-10">
            <a href="https://goo.gl/maps/UrL4bsbV2YLLCYpe6" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-sm text-gray-100 bg-orange-500 hover:bg-orange-300 focus:outline-none focus:bg-orange-300 transition duration-150 ease-in-out" target="_blank">
              Itinéraire
            </a>
          </div> -->
          <a href="https://goo.gl/maps/UrL4bsbV2YLLCYpe6" class="mt-6 px-5 py-2 focus:outline-none transition duration-150 ease-in-out flex items-center" @mouseover="hover = true" @mouseleave="hover = false">
            <span :class="{ 'map-icon-grow': hover }" class="mr-3 font-medium text-yellow-500 text-yellow-500" v-html="require('~/assets/icons/map.svg?include')"></span>
            <div class="text-base leading-6 font-light text-yellow-500 transition ease-in-out duration-150">Itinéraire</div>
          </a>
        </div>

        <div class="mt-12 flex flex-col items-center md:mt-8">
          <p class="text-base leading-5 font-semibold tracking-wider text-gray-900"><span class="font-headings text-yellow-500">Tél:</span> 06 46 17 34 02</p>
          <div class="flex justify-center items-center mt-6 md:mt-10">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-sm text-gray-100 bg-orange-500 hover:bg-orange-300 focus:outline-none focus:bg-orange-300 transition duration-150 ease-in-out">
              Contact e-mail
            </a>
          </div>
          <div class="mt-8 flex items-center">
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Instagram</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-instagram.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Facebook</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-facebook.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Pinterest</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-pinterest.svg?include')"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-orange-700">
        <p class="text-center font-light text-base leading-6">
          &copy; 2020 Atelier Pam Pam
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
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
      mobileNavOpen: false
    }
  },
  watch: {
    $route() {
      this.routeChange = true
      this.mobileNavOpen = false
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

<style>
/* Icon grow & Rotate*/
.map-icon-grow {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
  @apply text-orange-500 transition ease-in-out duration-150;
}
</style>
