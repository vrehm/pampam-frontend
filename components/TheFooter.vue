<template>
  <footer class="bg-white">
    <div class="w-full py-12 px-4 overflow-hidden border-t border-gray-200 sm:px-6 lg:py-16 lg:px-8">
      <div class="max-w-screen-xl mx-auto md:grid md:grid-cols-3 md:gap-8">
        <div class="flex flex-col items-center">
          <a href="#">
            <img class="h-20 lazyload" data-src="~/assets/img/logos/pampam-logo.svg" alt="Company name" />
          </a>
          <ul class="flex flex-col items-center mt-6">
            <li>
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Who is Pam Pam?
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                La Boutique
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                L'Atelier
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Côté Pro
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                Journal
              </a>
            </li>
            <li class="mt-2">
              <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                CGV
              </a>
            </li>
            <li class="mt-2">
              <nuxt-link :to="{ name: 'articles-article', params: { article: 58 } }" class="text-base leading-6 text-gray-500 hover:text-gray-900">
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
          <p class="mt-8 text-center text-gray-500 text-base leading-6">
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
                <span class="text-gray-400 hover:text-gray-500" v-html="require('~/assets/img/illustrations/social-instagram.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Facebook</span>
                <span class="text-gray-400 hover:text-gray-500" v-html="require('~/assets/img/illustrations/social-facebook.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center">
              <a href="https://www.instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Pinterest</span>
                <span class="text-gray-400 hover:text-gray-500" v-html="require('~/assets/img/illustrations/social-pinterest.svg?include')"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-center text-base leading-6 text-gray-400">
          &copy; 2020 Atelier Pam Pam
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
