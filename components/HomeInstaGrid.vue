<template>
  <section class="pb-20 sm:pb-28 md:pb-24 lg:pb-28 xl:pb-48 bg-yellow-100">
    <div class="relative max-w-screen-xl mx-auto pt-24 lg:pt-28 pb-4 md:pb-10 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 right-0 mt-16 md:mt-24 mr-20 sm:mr-40 md:mr-64 transform md:-translate-x-2 lg:-translate-x-24 xl:-translate-x-48 translate-y-48 sm:translate-y-20 lg:translate-y-16">
        <div class="w-10 sm:w-14 lg:w-16 xl:w-20 rotate-pam-1-custom">
          <span class="text-green-400" v-html="require('~/assets/img/illustrations/boutique-pam.svg?include')"></span>
        </div>
      </div>

      <div class="absolute top-0 right-0 mt-12 md:mt-24 mr-6 sm:mr-20 md:mr-48 lg:mr-64 transform -translate-x-2 sm:translate-x-0 lg:-translate-x-2 xl:-translate-x-20 translate-y-56 sm:translate-y-24 lg:translate-y-20">
        <div class="w-10 sm:w-14 lg:w-16 xl:w-20 rotate-pam-2-custom">
          <span class="text-green-400" v-html="require('~/assets/img/illustrations/boutique-pam.svg?include')"></span>
        </div>
      </div>

      <h2 class="text-center sm:text-left font-headings text-4xl lg:text-5xl leading-8 sm:leading-9text-lg tracking-tight text-gray-900">La boutique <span class="font-light text-base italic sm:text-lg tracking-normal">Mes derniers posts</span></h2>
      <p class="mt-10 text-center sm:text-left text-base sm:text-lg italic leading-6 text-gray-900">
        Une pièce vous a tapé dans l’oeil ?<br />
        Vous pouvez l’acheter en ligne !
      </p>

      <div class="mt-10 md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
        <div class="flex flex-col items-center">
          <div class="flex justify-center items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/boutique-number-1.svg?include')"></span>
            </div>
          </div>
          <div class="mt-5">
            <p class="font-light text-base text-center leading-6 text-gray-900">
              Parcourez le feed de nouveauté et leurs descriptions détaillées sur ma page instagram (cliquez sur une photo !)
            </p>
          </div>
        </div>

        <div class="mt-10 md:mt-0 flex flex-col items-center">
          <div class="flex justify-center items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/boutique-number-2.svg?include')"></span>
            </div>
          </div>
          <div class="mt-5 flex flex-col items-center">
            <p class="font-light text-base text-center leading-6 text-gray-900">
              Prenez contact avec moi! Ici sur le chat, par mail ou dans la messagerie Instagram !
            </p>
            <button onclick="$crisp.push(['do', 'chat:open'])" class="px-5 py-2 focus:outline-none transition duration-150 ease-in-out mt-3 flex items-center">
              <div class="font-blur text-base leading-6">Parler maintenant =></div>
              <span class="ml-3 font-medium text-green-400 hvr-grow-rotate" v-html="require('~/assets/img/illustrations/crisp-bouton.svg?include')"></span>
            </button>
          </div>
        </div>

        <div class="mt-10 md:mt-0 flex flex-col items-center">
          <div class="flex justify-center items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/boutique-number-3.svg?include')"></span>
            </div>
          </div>
          <div class="mt-5">
            <p class="font-light text-base text-center leading-6 text-gray-900">
              Faites vous livrer partout en France et certains pays d’Europe ! Coût sur demande.
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-2 mt-16 md:mt-14 overflow-hidden">
        <a v-for="post in posts" :key="post.id" :href="post.permalink" target="_blank" class="col-span-1 bg-gray-50">
          <figure class="picture">
            <picture>
              <img class="max-h-custom-insta w-full object-cover lazyload" :data-src="post.media_url" :alt="post.username + ' le ' + post.timestamp + ' - ' + post.caption" />
            </picture>
          </figure>
        </a>
      </div>
    </div>

    <!-- Transition -->
    <div class="relative mt-16 sm:mt-20 lg:mt-10">
      <div class="absolute left-0 w-7/12 sm:w-6/12 md:w-5/12">
        <span class="text-gray-900" v-html="require('~/assets/img/illustrations/boutique-transition.svg?include')"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    /*
     * Instagram posts from api.
     */
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.max-h-custom-insta {
  max-height: 90px;
}

.rotate-pam-1-custom {
  transform: rotate(-20deg);
}

.rotate-pam-2-custom {
  transform: rotate(15deg);
}

/* Max height for mobile */
@screen sm {
  .max-h-custom-insta {
    max-height: 250px;
  }
}

/* Max height for medium */
@screen md {
  .max-h-custom-insta {
    max-height: 230px;
  }
}

/* Max height for large */
@screen lg {
  .max-h-custom-insta {
    max-height: 300px;
  }
}

/* Max height for xl */
@screen xl {
  .max-h-custom-insta {
    max-height: 400px;
  }
}
</style>
