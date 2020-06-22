<template>
  <section class="pt-6 md:pt-4 lg:pt-12 pb-20 sm:pb-28 md:pb-24 lg:pb-28 xl:pb-40 bg-white">
    <div class="md:flex md:justify-center max-w-screen-xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full md:w-6/12 md:pr-4">
        <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9 text-gray-900">
          Who is Pam Pam?
        </h2>

        <div class="w-11/12 sm:w-8/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mt-10">
          <img class="rounded-md lazyload" data-src="~/assets/img/home/portrait-700x804.jpg" alt="portrait" />
        </div>

        <div class="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mt-10">
          <p class="mt-2 text-base text-justify leading-6 text-gray-900">
            “Moi, c’est Cécile. Mais vous pouvez m’appeler Pam Pam je répondrais ;).<br />
            Quand j’étais enfant j’écoutais “Aléo 104.8” à la radio, ils passaient Piaf, les Beach Boys, Brel et puis “Lollipop” des Chordettes.(...)”
          </p>
        </div>

        <div class="flex justify-center items-center mt-6">
          <button class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
            Lire l'article
          </button>
        </div>
      </div>

      <!-- Was md:border-l-2 border-dashed border-gray-900 -->
      <div class="relative w-full md:w-6/12 md:pl-4 overflow-hidden">
        <div class="hidden md:block absolute left-0">
          <div class="flex flex-col">
            <div class="w-2">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-border.svg?include')"></span>
            </div>
            <div class="w-2">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-border.svg?include')"></span>
            </div>
            <div class="w-2">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-border.svg?include')"></span>
            </div>
          </div>
        </div>

        <div class="mt-28 md:mt-0">
          <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl sm:leading-9 text-yellow-500">
            Mes valeurs
          </h2>
        </div>

        <div class="w-11/12 md:w-10/12 mx-auto mt-10">
          <p class="mt-2 text-base text-justify leading-6 text-gray-900">
            À l’Atelier Pam Pam, je fais la quête du beau et de la poésie au quotidien.<br />
            Choisir de s’entourer de choses qui ont du sens et qui vous procure une émotion particulière, c’est ce que j’encourage.
          </p>
          <p class="mt-2 text-base text-justify leading-6 text-gray-900">
            C’est pourquoi j’aime diffuser au delà des meubles, un art de vivre, où poésie, singularité et conscience sont les maîtres mots.
          </p>
        </div>

        <div class="w-11/12 md:w-10/12 mx-auto">
          <div class="flex mt-10">
            <div class="flex-shrink-0">
              <div class="flex justify-center items-start">
                <div class="w-10 sm:w-14 md:w-8 lg:w-10">
                  <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-poetique.svg?include')"></span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Poésie
              </h3>
              <p class="mt-2 text-base italic leading-6 text-gray-500">
                C'est comme un peu de magie, on en a tous besoin autour de nous
              </p>
            </div>
          </div>

          <div class="flex mt-10">
            <div class="flex-shrink-0">
              <div class="flex justify-center items-start">
                <div class="w-10 sm:w-14 md:w-8 lg:w-10">
                  <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-singuliere.svg?include')"></span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Singularité
              </h3>
              <p class="mt-2 text-base italic leading-6 text-gray-500">
                Parce que chaque lieu et chaque personne est un univers
              </p>
            </div>
          </div>

          <div class="flex mt-10">
            <div class="flex-shrink-0">
              <div class="flex justify-center items-start">
                <div class="w-10 sm:w-14 md:w-8 lg:w-10">
                  <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-consciente.svg?include')"></span>
                </div>
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Conscience
              </h3>
              <p class="mt-2 text-base italic leading-6 text-gray-500">
                Réutiliser ce qui existe déjà et préserver notre patrimoine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Transition -->
    <div class="relative mt-16 sm:mt-20 lg:mt-10">
      <div class="absolute right-0 w-7/12 sm:w-6/12 md:w-5/12">
        <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presentation-transition.svg?include')"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
