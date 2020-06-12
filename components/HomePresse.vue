<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-28 px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-end">
        <h2 class="mr-2 sm:mr-4 text-center text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-left sm:text-3xl sm:leading-9">
          Pam Pam dans la presse
        </h2>
        <div class="w-6 sm:w-10 transform -translate-y-1">
          <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presse.svg?include')"></span>
        </div>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-around pt-14">
        <div class="flex justify-center w-3/5 md:w-1/4 lg:w-1/5">
          <a href="https://www.tiffanyoliverphotographies.com/blog-photographe-mariage-lyon/mes-brocs-ont-du-talent-photographe-puces-du-canal-a-lyon-atelier-pampam" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/logo-tiffany-photographies.jpg" alt="Tiffany Photographies" />
          </a>
        </div>
        <div class="flex justify-center mt-14 md:mt-0 w-3/5 md:w-1/4 lg:w-1/5">
          <a href="https://www.mylittlelyon.com/deco/la-brocante-qui-joue-a-cache-cache" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/logo-my-little-lyon.png" alt="My Little Lyon" />
          </a>
        </div>
        <div class="flex justify-center p-2 mt-14 md:mt-0 w-3/5 md:w-1/4 lg:w-1/5">
          <a href="https://nouvellesrepliques.wordpress.com/2017/02/28/loch-nessbroctheatre-au-theatre-des-voraces-lyon/" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/logo-nouvelles-repliques.jpg" alt="Nouvelles Répliques" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
