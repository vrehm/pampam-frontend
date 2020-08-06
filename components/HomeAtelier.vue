<template>
  <section class="pt-12 md:pt-20 pb-28 sm:pb-48 md:pb-40 lg:pb-48 bg-yellow-100">
    <div class="max-w-screen-xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title and intro -->
      <div class="flex justify-center items-end md:justify-start">
        <h2 class="mr-1 md:mr-3 text-center sm:text-left font-headings text-4xl lg:text-5xl leading-8 sm:leading-9 tracking-wide text-gray-900">L<span class="font-normal">'</span>Atelier</h2>
        <div class="w-10 md:w-12 lg:w-14 transform -translate-y-1">
          <span class="text-gray-900" v-html="require('~/assets/img/illustrations/atelier-tools.svg?include')"></span>
        </div>
      </div>

      <p class="mt-10 text-base sm:text-lg text-center sm:text-left font-light leading-6 text-gray-900">
        J’aime mélanger restauration et création. Ainsi vous trouverez à l’atelier un mélange de brocante <br class="hidden lg:inline" />
        et de créations originales essentiellement faites à partir d’éléments chinés. Ma spécialité: les luminaires !
      </p>

      <!-- Les luminaires -->
      <div class="mt-10 md:mt-16 md:flex md:justify-center">
        <!-- Left block -->

        <div class="w-full md:w-6/12 md:pr-8">
          <div class="flex justify-center items-end md:justify-start">
            <h3 class="mr-1 lg:mr-0 text-center md:text-left text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-yellow-500">
              Les luminaires
            </h3>
            <div class="w-8 lg:w-14 transform translate-y-1 lg:hidden">
              <span class="text-yellow-500" v-html="require('~/assets/img/illustrations/atelier-luminaires.svg?include')"></span>
            </div>
          </div>

          <div class="mt-6 w-11/12 mx-auto sm:w-full">
            <p class="mt-2 text-base text-justify leading-6 text-gray-900 font-light">
              Réanimer un objet, créer une atmosphère, habiller un espace, c’est vraiment tout ce que j’aime !
            </p>
            <p class="mt-2 text-base text-justify leading-6 text-gray-900 font-light">
              Retrouvez mes créations assignées de la mention “Made by Atelier Pam Pam” sur ma boutique Instagram et à l’atelier ! Je réalise également des pièces sur mesure pour mes clients, en m’adaptant à leur envies et à leurs besoins. Prenez contact avec moi pour un devis !
            </p>
          </div>

          <!-- Hidden on mobile -->
          <div class="hidden md:flex md:justify-center md:items-center mt-6">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-sm shadow text-gray-100 bg-orange-500 hover:bg-orange-300 focus:outline-none focus:bg-gray-400 transition duration-150 ease-in-out">
              Me contacter
            </a>
          </div>
        </div>

        <!-- Right block -->
        <div class="mt-12 w-full md:flex md:mt-0 md:w-6/12 md:pl-8">
          <div class="w-11/12 mx-auto lg:w-7/12">
            <img class="w-full lazyload" data-src="~/assets/img/home/luminaire1-700x729.jpg" alt="portrait" />
          </div>

          <div class="hidden lg:flex lg:justify-center lg:w-5/12 lg:mx-auto">
            <div class="w-28 transform -translate-y-5">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/atelier-luminaires.svg?include')"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Le textile -->
      <div class="flex flex-col mt-14 md:flex-row md:justify-center md:mt-16">
        <!-- Left block -->
        <div class="order-2 mt-12 w-full md:order-1 md:flex md:mt-0 md:w-6/12 md:pr-8">
          <div class="w-11/12 mx-auto lg:w-7/12">
            <img class="w-full lazyload" data-src="~/assets/img/home/textile1-700x733.jpg" alt="portrait" />
          </div>

          <!-- Hidden on tablet, desktop -->
          <div class="flex justify-center items-center mt-12 md:hidden">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-sm shadow text-gray-100 bg-orange-500 hover:bg-orange-300 focus:outline-none focus:bg-gray-400 transition duration-150 ease-in-out">
              Me contacter
            </a>
          </div>

          <div class="hidden lg:flex lg:justify-center lg:w-5/12 lg:mx-auto">
            <div class="w-48 transform translate-x-8 translate-y-10">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/atelier-coussins.svg?include')"></span>
            </div>
          </div>
        </div>

        <!-- Right block -->
        <div class="order-1 md:order-2 w-full md:w-6/12 md:pl-8">
          <div class="flex justify-center items-end md:justify-start">
            <h3 class="mr-2 lg:mr-0 text-center md:text-left text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-yellow-500">
              Le textile
            </h3>
            <div class="w-14 lg:w-14 transform translate-y-1 lg:hidden">
              <span class="text-yellow-500" v-html="require('~/assets/img/illustrations/atelier-coussins.svg?include')"></span>
            </div>
          </div>

          <div class="mt-6 w-11/12 mx-auto sm:w-full">
            <p class="mt-2 text-base text-justify leading-6 text-gray-900 font-light">
              Mon premier amour ! Ayant débuté comme tapissière, je suis passionnée par cette matière, au travers du toucher, des couleurs, des motifs, j’adore l’incorporer un peu partout et imaginer de nouveaux prototypes d’objets en utilisant notamment des linges et étoffes anciennes.
            </p>
            <p class="mt-2 text-base text-justify leading-6 text-gray-900 font-light">
              Coussins, poufs, suspensions végétales ou encore toiles murales. Je travaille en séries limitées ou pièces uniques, retrouvez mes créations assignées de la mention “Made by Atelier Pam Pam” sur ma boutique Instagram et à l’atelier !
            </p>
          </div>
        </div>
      </div>

      <!-- Transition -->
      <div class="relative mt-4">
        <div class="absolute right-0 w-10/12 md:w-6/12 lg:w-2/12 transform -translate-x-6 md:-translate-x-2 lg:-translate-x-20 xl:-translate-x-24 translate-y-4 md:translate-y-6 xl:-translate-y-10">
          <span class="text-yellow-500" v-html="require('~/assets/img/illustrations/atelier-transition.svg?include')"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
