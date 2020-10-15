<template>
  <section class="bg-yellow-100">
    <div class="relative">
      <div class="absolute right-0 w-5/12 sm:w-4/12 lg:w-3/12 transform -translate-x-1 sm:-translate-x-2 md:-translate-x-6 xl:-translate-x-10 -translate-y-2 md:-translate-y-12 lg:-translate-y-6 xl:-translate-y-16">
        <span class="text-gray-900" v-html="require('~/assets/img/illustrations/newsletter-transition-top.svg?include')"></span>
      </div>
    </div>
    <div class="px-4 sm:px-6 md:px-0 lg:px-12 pt-20 md:pt-6 lg:pt-32 pb-12 md:pb-0 lg:pb-16 max-w-full md:max-w-2xl lg:max-w-4xl mx-auto">
      <div class="flex flex-col items-center px-6 md:px-0 pt-20 sm:pt-20 md:pt-40 lg:pt-32 pb-20 sm:pb-20 md:pb-40 background-newsletter-custom rounded-sm">
        <div class="text-center xl:flex-1">
          <h2 class="mt-0 md:mt-4 text-2xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-9">
            La lettre !
          </h2>
          <p class="mt-3 md:mt-10 md:max-w-lg lg:max-w-xl md:text-base lg:text-lg leading-6 text-gray-100">
            Tous les mois, recevez un billet inspirant, mes nouvelles trouvailles et des avants-premières directement dans votre boîte mail !
          </p>
        </div>

        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup" class="mt-8 sm:w-full sm:max-w-md">
          <form id="mc-embedded-subscribe-form" action="https://atelierpampam.us3.list-manage.com/subscribe/post?u=44312ed5753831f4a0c075ce9&amp;id=fb83edb4f1" method="post" name="mc-embedded-subscribe-form" class="validate sm:flex" target="_blank" novalidate>
            <input id="mce-EMAIL" aria-label="Email address" type="email" required class="appearance-none w-full px-5 py-2 border border-transparent text-base leading-6 rounded-md text-gray-900 bg-gray-100 placeholder-orange-200 focus:outline-none focus:placeholder-orange-100 transition duration-150 ease-in-out" name="EMAIL" placeholder="isaure@brocanteboheme.com" />

            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_44312ed5753831f4a0c075ce9_fb83edb4f1" tabindex="-1" value="" />
            </div>

            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button id="mc-embedded-subscribe" type="submit" name="subscribe" class="w-full flex items-center justify-center px-5 py-2 border border-transparent bg-orange-500 hover:bg-orange-300 rounded-md focus:outline-none transition duration-150 ease-in-out">
                <div class="w-28">
                  <span class="text-gray-900" v-html="require('~/assets/img/illustrations/newsletter-button.svg?include')"></span>
                </div>
              </button>
            </div>
          </form>

          <p class="mt-3 text-sm leading-5 text-gray-100">
            Nous nous soucions de la protection de vos données. Lisez notre
            <nuxt-link :to="{ name: 'articles-article', params: { article: 'mentions-legales' } }" class="text-orange-200 font-medium underline">
              Politique de confidentialité.
            </nuxt-link>
          </p>
        </div>
        <!--End mc_embed_signup-->
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.background-newsletter-custom {
  background-image: url('~@/assets/img/illustrations/newsletter-background-mobile.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@screen sm {
  .background-newsletter-custom {
    background-image: url('~@/assets/img/illustrations/newsletter-background.svg');
  }
}

@screen md {
  .background-newsletter-custom {
    background-size: contain;
  }
}
</style>
