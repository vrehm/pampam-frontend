<template>
  <section class="pt-6 md:pt-0 pb-12 sm:pb-8 md:pb-24 lg:pb-32 bg-yellow-100 relative">
    <div class="max-w-screen-lg mt-10 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-center mt-0">
        <!-- Left block -->
        <div class="flex flex-col mt-0 sm:mt-10 md:mt-0 ml-0 xl:mr-4 w-full md:w-6/12">
          <!-- Hidden title on desktop -->
          <h2 class="text-center font-headings text-4xl leading-8 sm:leading-9 tracking-tight text-gray-900 md:hidden">
            Le showroom
          </h2>

          <div class="mt-2 sm:mt-6 md:mt-0 mx-auto w-11/12 sm:w-9/12 md:w-11/12">
            <div class="flex justify-between">
              <div class="w-12 md:w-14 lg:w-16 xl:w-14 transform -translate-x-4 md:-translate-x-6 xl:-translate-x-20 -translate-y-3">
                <span class="text-gray-900" v-html="require('~/assets/img/illustrations/showroom-projector-left.svg?include')"></span>
              </div>
              <div class="w-12 md:w-14 lg:w-16 xl:w-14 transform translate-x-4 md:translate-x-8 lg:translate-x-12 xl:translate-x-16 -translate-y-3 xl:-translate-y-5">
                <span class="text-gray-900" v-html="require('~/assets/img/illustrations/showroom-projector-right.svg?include')"></span>
              </div>
            </div>
          </div>

          <div class="mx-auto w-11/12 sm:w-9/12 md:w-11/12">
            <VueSlickCarousel v-bind="settings">
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-1-700x933.jpg" alt="Photo showroom 1" />
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-2-700x855.jpg" alt="Photo showroom 2" />
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-3-700x875.jpg" alt="Photo showroom 3" />
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-4-700x875.jpg" alt="Photo showroom 4" />
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-5-700x958.jpg" alt="Photo showroom 5" />
              <img class="w-full max-h-custom-showroom object-cover lazyload" data-src="~/assets/img/home/showroom-6-700x928.jpg" alt="Photo showroom 6" />
            </VueSlickCarousel>
          </div>
        </div>

        <!-- Right block -->
        <div class="ml-0 xl:ml-4 w-full md:w-6/12">
          <div class="mx-auto pt-0 md:pt-24 lg:pt-28 xl:pt-48">
            <h2 class="hidden md:block text-center font-headings text-4xl lg:text-5xl leading-9 tracking-tight text-gray-900">
              Le showroom
            </h2>

            <div class="flex flex-col mt-8 md:mt-12">
              <div>
                <h3 class="text-center text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-yellow-500">
                  Adresse
                </h3>
                <p class="mt-2 text-center text-base leading-6 text-gray-900 font-light">
                  18 bis Avenue Henri Barbusse<br />
                  69250 Albigny-sur -Saône
                </p>
              </div>
              <div class="mt-6">
                <h3 class="text-center text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-yellow-500">
                  Horaires
                </h3>
                <p class="mt-2 text-center text-base leading-6 text-gray-900 font-light">
                  Ouvert du Mardi au Samedi<br class="sm:hidden" />
                  sur rendez-vous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Transition -->
      <div class="absolute bottom-0 right-0 w-7/12 sm:w-6/12 md:w-3/12">
        <span class="text-yellow-500" v-html="require('~/assets/img/illustrations/transition-end.svg?include')"></span>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel
  },
  data: () => ({
    settings: {
      lazyLoad: 'ondemand',
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    }
  })
}
</script>

<style>
.max-h-custom-showroom {
  max-height: 350px;
}

@screen sm {
  .max-h-custom-showroom {
    max-height: 400px;
  }
}

@screen md {
  .max-h-custom-showroom {
    max-height: 350px;
  }
}

@screen lg {
  .max-h-custom-showroom {
    max-height: 450px;
  }
}

@screen xl {
  .max-h-custom-showroom {
    max-height: 500px;
  }
}
</style>
