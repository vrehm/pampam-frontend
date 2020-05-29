<template>
  <section class="pt-6 pb-12 sm:pb-8 md:pt-12 md:pb-20 bg-white">
    <div class="max-w-screen-xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Atelier title and intro -->
      <div class="flex flex-col justify-center sm:flex-row sm:justify-start sm:items-end">
        <h2 class="sm:mr-0 text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:mr-3 sm:text-left sm:text-3xl sm:leading-9">
          L'Atelier
        </h2>
        <div class="text-center italic text-2xl leading-8 tracking-tight text-gray-200 sm:text-left sm:text-3xl sm-leaing-9">
          illustration
        </div>
      </div>

      <p class="mt-6 text-base text-center italic leading-6 text-gray-900 sm:text-lg sm:text-left">
        J’aime mélanger restauration et création. Ainsi vous trouverez à l’atelier un mélange de brocante <br class="hidden lg:inline" />
        et de créations originales essentiellement faites à partir d’éléments chinés. Ma spécialité: les luminaires !
      </p>

      <!-- Les luminaires -->
      <div class="mt-14 md:mt-16 md:flex md:justify-center">
        <!-- Left block -->
        <div class="w-full md:w-6/12 md:pr-8">
          <div class="flex items-end w-11/12 mx-auto sm:w-full">
            <h3 class="mr-3 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              Les luminaires
            </h3>
            <div class="text-xl italic leading-8 tracking-tight text-gray-200 sm:text-2xl sm:leading-9">
              illustration
            </div>
          </div>

          <div class="mt-10 w-11/12 mx-auto sm:w-full">
            <p class="mt-2 text-base text-justify leading-6 text-gray-900">
              Réanimer un objet, créer une atmosphère, habiller un espace, c’est vraiment tout ce que j’aime !
            </p>
            <p class="mt-2 text-base text-justify leading-6 text-gray-900">
              Retrouvez mes créations assignées de la mention “Made by Atelier Pam Pam” sur ma boutique Instagram et à l’atelier ! Je réalise également des pièces sur mesure pour mes clients, en m’adaptant à leur envies et à leurs besoins. Prenez contact avec moi pour un devis !
            </p>
          </div>

          <div class="hidden md:flex md:justify-center md:items-center mt-6">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-150 ease-in-out">
              Me contacter
            </a>
          </div>
        </div>

        <!-- Right block -->
        <div class="mt-12 w-full md:flex md:mt-0 md:w-6/12 md:pl-8">
          <div class="w-11/12 mx-auto lg:w-7/12">
            <img class="w-full rounded-md lazyload" data-src="~/assets/img/home/luminaire1-700x729.jpg" alt="portrait" />
          </div>

          <div class="hidden lg:block lg:w-5/12 lg:mx-auto">
            <div class="text-center text-xl italic leading-8 tracking-tight text-gray-200 md:text-2xl md:leading-9">
              illustration
            </div>
          </div>
        </div>
      </div>

      <!-- Le textile -->
      <div class="flex flex-col mt-14 md:flex-row md:justify-center md:mt-16">
        <!-- Left block -->
        <div class="order-2 mt-12 w-full md:order-1 md:flex md:mt-0 md:w-6/12 md:pr-8">
          <div class="w-11/12 mx-auto lg:w-7/12">
            <img class="w-full rounded-md lazyload" data-src="~/assets/img/home/textile1-700x733.jpg" alt="portrait" />
          </div>

          <div class="flex justify-center items-center mt-12 md:hidden">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition duration-150 ease-in-out">
              Me contacter
            </a>
          </div>

          <div class="hidden lg:block lg:w-5/12 lg:mx-auto">
            <div class="text-center text-xl italic leading-8 tracking-tight text-gray-200 md:text-2xl md:leading-9">
              illustration
            </div>
          </div>
        </div>

        <!-- Right block -->
        <div class="order-1 md:order-2 w-full md:w-6/12 md:pl-8">
          <div class="flex items-end w-11/12 mx-auto sm:w-full">
            <h3 class="mr-3 text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
              Le textile
            </h3>
            <div class="text-xl italic leading-8 tracking-tight text-gray-200 sm:text-2xl sm:leading-9">
              illustration
            </div>
          </div>

          <div class="mt-10 w-11/12 mx-auto sm:w-full">
            <p class="mt-2 text-base text-justify leading-6 text-gray-900">
              Mon premier amour ! Ayant débuté comme tapissière, je suis passionnée par cette matière, au travers du toucher, des couleurs, des motifs, j’adore l’incorporer un peu partout et imaginer de nouveaux prototypes d’objets en utilisant notamment des linges et étoffes anciennes.
            </p>
            <p class="mt-2 text-base text-justify leading-6 text-gray-900">
              Coussins, poufs, suspensions végétales ou encore toiles murales. Je travaille en séries limitées ou pièces uniques, retrouvez mes créations assignées de la mention “Made by Atelier Pam Pam” sur ma boutique Instagram et à l’atelier !
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
