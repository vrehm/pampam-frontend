<template>
  <section class="relative pt-20 sm:pt-28 sm:pb-56 lg:pb-16 bg-yellow-100">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:justify-around lg:items-center">
      <div class="flex justify-center items-end">
        <h2 class="mr-2 sm:mr-4 text-center sm:text-left font-headings text-3xl sm:text-4xl lg:text-5xl leading-8 sm:leading-9 tracking-tight text-gray-900">
          Ils parlent de Pam Pam
        </h2>
        <div class="w-6 sm:w-8 ml-1 md:ml-0 transform -translate-y-1.5 sm:-translate-y-1 lg:translate-y-0">
          <span class="text-gray-900" v-html="require('~/assets/img/illustrations/presse.svg?include')"></span>
        </div>
      </div>

      <div class="flex items-center justify-center lg:pt-20 mt-8">
        <div class="flex justify-center w-16 lg:w-32">
          <a href="https://www.tiffanyoliverphotographies.com/blog-photographe-mariage-lyon/mes-brocs-ont-du-talent-photographe-puces-du-canal-a-lyon-atelier-pampam" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/tiffanyoliver-logo.png" alt="Tiffany Photographies" />
          </a>
        </div>
        <div class="flex justify-center  w-16 lg:w-24 mx-8 md:mx-16">
          <a href="https://www.mylittlelyon.com/deco/la-brocante-qui-joue-a-cache-cache" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/logo-my-little-lyon.png" alt="My Little Lyon" />
          </a>
        </div>
        <div class="flex justify-center  w-16 lg:w-32">
          <a href="https://nouvellesrepliques.wordpress.com/2017/02/28/loch-nessbroctheatre-au-theatre-des-voraces-lyon/" target="_blank">
            <img class="lazyload" data-src="~/assets/img/logos/nouvelles-repliques-logo.png" alt="Nouvelles Répliques" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
