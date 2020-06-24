<template>
  <section class="bg-white">
    <div class="relative">
      <div class="absolute right-0 w-5/12 sm:w-4/12 lg:w-3/12 transform -translate-x-1 sm:-translate-x-2 md:-translate-x-6 xl:-translate-x-10 -translate-y-2 md:-translate-y-12 lg:-translate-y-6 xl:-translate-y-16">
        <span class="text-gray-900" v-html="require('~/assets/img/illustrations/newsletter-transition-top.svg?include')"></span>
      </div>
    </div>
    <div class="px-4 sm:px-6 md:px-0 lg:px-12 pt-20 sm:pt-20 md:pt-6 lg:pt-32 pb-12 sm:pt-20 md:pb-0 lg:pb-16 max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
      <div class="flex flex-col items-center px-6 md:px-0 pt-20 sm:pt-20 md:pt-40 lg:pt-32 pb-20 sm:pb-20 md:pb-40 background-newsletter-custom rounded-sm">
        <div class="text-center xl:flex-1">
          <h2 class="mt-0 md:mt-4 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-9">
            La lettre !
          </h2>
          <p class="mt-3 md:mt-10 md:max-w-lg lg:max-w-xl md:text-base lg:text-lg leading-6 text-gray-100">
            Tous les mois, recevez un billet inspirant, mes nouvelles trouvailles et des avants-premières directement dans votre boîte mail !
          </p>
        </div>
        <div class="mt-8 sm:w-full sm:max-w-md">
          <form class="sm:flex">
            <input aria-label="Email address" type="email" required class="appearance-none w-full px-5 py-2 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out" placeholder="Votre e-mail" />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <!-- Was text-base leading-6 font-medium text-white -->
              <button class="w-full flex items-center justify-center px-5 py-2 border border-transparent bg-gray-500 hover:bg-gray-400 rounded-md focus:outline-none transition duration-150 ease-in-out">
                <div class="w-28">
                  <span class="text-gray-50" v-html="require('~/assets/img/illustrations/newsletter-button.svg?include')"></span>
                </div>
              </button>
            </div>
          </form>
          <p class="mt-3 text-sm leading-5 text-gray-100">
            Nous nous soucions de la protection de vos données. Lisez notre
            <a href="#" class="text-gray-300 font-medium underline">
              Politique de confidentialité.
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.background-newsletter-custom {
  background-image: url('~@/assets/img/illustrations/newsletter-background.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@screen md {
  .background-newsletter-custom {
    background-size: contain;
  }
}
</style>
