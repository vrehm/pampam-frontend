<template>
  <footer class="bg-white">
    <div class="w-full pt-12 lg:pt-16 pb-4 lg:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-200">
      <div class="max-w-screen-xl mx-auto md:grid md:grid-cols-3 md:gap-8">
        <div class="flex flex-col items-center">
          <nuxt-link to="/">
            <img class="h-20 lazyload" data-src="~/assets/img/logos/pampam-logo.svg" alt="Company name" />
          </nuxt-link>

          <ul class="flex flex-col items-center mt-6">
            <li v-for="item in menuItems" :key="item.name" class="mt-2">
              <nuxt-link :to="{ path: item.path, hash: item.hash }" class="text-base leading-6 text-gray-900">
                {{ item.name }}
              </nuxt-link>
            </li>

            <!-- <li>
              <a href="#" class="text-base leading-6 text-gray-900">
                Who is Pam Pam?
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-900">
                La Boutique
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-900">
                L'Atelier
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-900">
                Côté Pro
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-900">
                Journal
              </a>
            </li> -->

            <li class="mt-2">
              <nuxt-link :to="{ name: 'articles-article', params: { article: 58 } }" class="text-base leading-6 text-gray-900">
                Mentions Légales
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="mt-12 flex flex-col items-center md:mt-8">
          <p class="text-base leading-5 font-semibold tracking-wider text-gray-900">
            Mon Atelier &amp; Boutique
          </p>
          <div class="flex justify-center items-center mt-6 md:mt-10">
            <a href="https://goo.gl/maps/UrL4bsbV2YLLCYpe6" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out" target="_blank">
              Itinéraire
            </a>
          </div>
          <p class="mt-8 text-center text-gray-900 text-base leading-6">
            Les Puces du Canal<br />
            3 Rue Eugène Pottier, 69100 Villeurbanne
          </p>
        </div>

        <div class="mt-12 flex flex-col items-center md:mt-8">
          <p class="text-base leading-5 font-semibold tracking-wider text-gray-900">
            Tél: 06 46 17 34 02
          </p>
          <div class="flex justify-center items-center mt-6 md:mt-10">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-400 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out">
              Contact e-mail
            </a>
          </div>
          <div class="mt-8 flex items-center">
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Instagram</span>
                <span class="text-gray-700" v-html="require('~/assets/img/illustrations/social-instagram.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Facebook</span>
                <span class="text-gray-700" v-html="require('~/assets/img/illustrations/social-facebook.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Pinterest</span>
                <span class="text-gray-700" v-html="require('~/assets/img/illustrations/social-pinterest.svg?include')"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-200">
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

<style></style>
