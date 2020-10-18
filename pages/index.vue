<template>
  <div>
    <section class="background-hero-custom h-screen flex items-start overflow-hidden min-h-300 md:min-h-550 lazyload">
      <div class="h-auto w-full mt-10 sm:mt-20 lg:mt-10 xl:mt-10 px-4 sm:px-6 landscape-hero-title-custom">
        <div class="hidden lg:block w-full lg:pl-48 xl:pl-64">
          <div class="flex flex-col items-start">
            <div>
              <nuxt-link to="/">
                <img class="w-24 md:w-32 lg:w-28 xl:w-32" src="~/assets/img/logos/pampam-logo.svg" alt="Logo" />
              </nuxt-link>
            </div>
            <h1 class="mt-4 text-4xl sm:text-5xl md:text-lg lg:text-lg xl:text-xl tracking-tight leading-10 sm:leading-tight font-extrabold text-gray-100">
              Brocante poétique
              <br />
              <span class="text-orange-400">pour intérieurs singuliers</span>
            </h1>
          </div>
        </div>

        <div class="mt-0 lg:mt-12 xl:mt-6 max-w-screen-md mx-auto">
          <div class="flex flex-col items-center sm:pt-20 lg:pt-12 xl:pt-20 sm:pb-24 lg:pb-20 xl:pb-28 px-6 sm:px-0 md:px-0 background-newsletter-custom rounded-sm">
            <div class="text-center xl:flex-1">
              <h2 class="mt-0 sm:mt-4 md:mt-4 text-2xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-100 sm:leading-9">
                Site en construction
              </h2>
              <p class="mt-6 sm:mt-10 md:max-w-lg lg:max-w-xl text-base lg:text-lg leading-6 text-gray-100">
                Le site internet de l'atelier PamPam débarque bientôt !
                <br />
                Je veux être averti(e) du lancement du site
              </p>
            </div>

            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup" class="mt-4 sm:mt-8 sm:w-full sm:max-w-md">
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
                Nous nous soucions de la protection de vos données.
                <br />
                Nous n'utiliserons pas vos données auprès de partenaires.
              </p>
            </div>
            <!--End mc_embed_signup-->
          </div>
        </div>

        <div class="mt-8 sm:mt-12 flex flex-col items-center md:mt-8">
          <p class="text-base leading-5 font-semibold tracking-wider text-white">
            Tél: 06 46 17 34 02
          </p>
          <div class="flex justify-center items-center mt-6 md:mt-6">
            <a href="mailto:atelierpampam@gmail.com" class="px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-100 bg-orange-500 hover:bg-orange-300 focus:outline-none focus:bg-orange-300 transition duration-150 ease-in-out">
              Contact e-mail
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://instagram.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Instagram</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-instagram.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center mr-4 md:mr-6 lg:mr-4">
              <a href="https://facebook.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Facebook</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-facebook.svg?include')"></span>
              </a>
            </div>
            <div class="flex justify-center items-center">
              <a href="https://pinterest.com/atelierpampam" class="w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-10 lg:h-10" target="_blank">
                <span class="sr-only">Pinterest</span>
                <span class="text-orange-700 hover:text-orange-500 transition duration-150 ease-in-out" v-html="require('~/assets/img/illustrations/social-pinterest.svg?include')"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'waiting',
  mounted() {
    window.$crisp.push(['do', 'chat:hide'])
  }
}
</script>

<style>
.background-hero-custom {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=768');
  background-position: center, center;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

/* Background cover for mobile */
@screen sm {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=640');
  }
}

/* Margin for mobile landscape orientation */
@media only screen and (max-device-width: 767px) and (orientation: landscape) {
  .landscape-hero-title-custom {
    margin-bottom: 2rem;
  }
}

/* Background cover for medium */
@screen md {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=768');
  }
}

/* Background cover for large */
@screen lg {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=1024');
  }
}

/* Background cover for xl */
@screen xl {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=1280');
  }
}

/* For tablet landscape orientation (create conflicts) */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (orientation: landscape) {
  .landscape-hero-title-custom {
    margin-bottom: 2rem;
  }
}
*/

.background-newsletter-custom {
  background-image: none;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@screen sm {
  .background-newsletter-custom {
    background-image: url('~@/assets/img/illustrations/newsletter-background.svg');
    background-size: contain;
  }
}
</style>
