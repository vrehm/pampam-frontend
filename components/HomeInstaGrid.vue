<template>
  <section class="pb-20 sm:pb-28 md:pb-24 lg:pb-28 xl:pb-48 bg-white">
    <div class="relative max-w-screen-xl mx-auto my-20 lg:my-24 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 right-0 mr-20 sm:mr-40 md:mr-64 transform md:-translate-x-2 lg:-translate-x-24 xl:-translate-x-48 translate-y-40 sm:translate-y-16 lg:translate-y-10">
        <div class="w-10 sm:w-14 lg:w-16 xl:w-20 rotate-pam-1-custom">
          <span class="text-gray-800" v-html="require('~/assets/img/illustrations/boutique-pam.svg?include')"></span>
        </div>
      </div>

      <div class="absolute top-0 right-0 -mt-4 sm:mt-0 mr-6 sm:mr-20 md:mr-48 lg:mr-64 transform -translate-x-2 sm:translate-x-0 lg:-translate-x-2 xl:-translate-x-20 translate-y-48 sm:translate-y-20 lg:translate-y-14">
        <div class="w-10 sm:w-14 lg:w-16 xl:w-20 rotate-pam-2-custom">
          <span class="text-gray-800" v-html="require('~/assets/img/illustrations/boutique-pam.svg?include')"></span>
        </div>
      </div>

      <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight sm:text-left sm:text-3xl sm:leading-9text-lg text-gray-900">
        La boutique - mes derniers posts
      </h2>
      <p class="mt-6 text-base italic text-center leading-6 text-gray-900 sm:text-lg sm:text-left">
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
            <p class="text-base text-center leading-6 text-gray-500">
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
          <div class="mt-5">
            <p ArticleShowHeroSectionShareBox.vue class="text-base text-center leading-6 text-gray-500">
              Prenez contact avec moi! Ici sur le chat, par mail ou dans la messagerie Instagram !
              <button onclick="$crisp.push(['do', 'chat:open'])" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md shadow text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                [Petite icône lien chat]
              </button>
            </p>
          </div>
        </div>

        <div class="mt-10 md:mt-0 flex flex-col items-center">
          <div class="flex justify-center items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <span class="text-gray-900" v-html="require('~/assets/img/illustrations/boutique-number-3.svg?include')"></span>
            </div>
          </div>
          <div class="mt-5">
            <p class="text-base text-center leading-6 text-gray-500">
              Faites vous livrer partout en France et certains pays d’Europe ! Coût sur demande.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-14 md:grid-cols-3 overflow-hidden">
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

<style>
.max-h-custom-insta {
  max-height: 500px;
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
