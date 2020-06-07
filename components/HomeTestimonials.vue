<template>
  <section class="bg-yellow-600">
    <div class="max-w-screen-xl mx-auto pb-6 md:flex md:justify-between md:px-6 lg:px-8">
      <vue-slick-carousel class="w-full flex-1 py-12 px-4 sm:px-6 md:py-16" v-bind="settings">
        <testimonial-card v-for="customer in customers" :key="customer.id" class="hidden sm:block flex-1 py-12 px-4 sm:px-6 md:py-16" :name="customer.name" :testimony="customer.testimony" :customer-img="customer.customerImg" />
      </vue-slick-carousel>

      <!-- <div class="flex-1 py-12 px-4 sm:px-6 md:py-16">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img class="h-20 w-20 rounded-full lazyload" data-src="~/assets/img/avatars/avatar-dorian256x256.jpg" alt="Photo de profil" />
              </div>
              <div class="mt-4">
                <div class="text-base leading-6 font-medium text-white">
                  Dorian Pillot
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8 relative text-lg leading-7 font-medium text-white">
              <p class="relative text-center text-base leading-6 text-gray-100">
                <svg class="inline-block transform -translate-x-0 -translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                Un lieu superbe et des objets riches d'histoires...
                <svg class="inline-block transform rotate-180 translate-x-0 translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </p>
            </div>
          </div>
        </div> -->

      <!-- <div class="hidden md:block flex-1 py-12 px-4 sm:px-6 md:py-16">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img class="h-20 w-20 rounded-full lazyload" data-src="~/assets/img/avatars/avatar-lilubelle256x256.jpg" alt="Photo de profil" />
              </div>
              <div class="mt-4">
                <div class="text-base leading-6 font-medium text-white">
                  Lilubelle Jh
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8 relative text-lg leading-7 font-medium text-white">
              <p class="relative text-center text-base leading-6 text-gray-100">
                <svg class="inline-block transform -translate-x-0 -translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra abordables !<br />
                Belle continuation.
                <svg class="inline-block transform rotate-180 translate-x-0 translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </p>
            </div>
          </div>
        </div> -->

      <!-- <div class="hidden lg:block flex-1 py-12 px-4 sm:px-6 md:py-16">
          <div class="flex flex-col items-center">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img class="h-20 w-20 rounded-full lazyload" data-src="~/assets/img/avatars/avatar-leonid256x256.jpg" alt="Photo de profil" />
              </div>
              <div class="mt-4">
                <div class="text-base leading-6 font-medium text-white">
                  Leonid Von Ciesielski
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8 relative text-lg leading-7 font-medium text-white">
              <p class="relative text-center text-base leading-6 text-gray-100">
                <svg class="inline-block transform -translate-x-0 -translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                Multi merci pour cette belle personne très avenante, très conciliante et très serviable.<br />
                Je recommande.
                <svg class="inline-block transform rotate-180 translate-x-0 translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </p>
            </div>
          </div>
        </div> -->
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import TestimonialCard from '~/components/TestimonialCard.vue'

export default {
  components: {
    VueSlickCarousel,
    TestimonialCard
  },
  data: () => ({
    settings: {
      lazyLoad: 'ondemand',
      arrows: false,
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    },
    customers: [
      {
        name: 'Lilubelle Jh',
        testimony: 'Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra abordables !\nBelle continuation.',
        customerImg: require('~/assets/img/avatars/avatar-lilubelle256x256.jpg')
      },
      {
        name: 'Dorian Pillot',
        testimony: "Un lieu superbe et des objets riches d'histoires...",
        customerImg: require('~/assets/img/avatars/avatar-dorian256x256.jpg')
      },
      {
        name: 'Leonid Von Ciesielski',
        testimony: 'Multi merci pour cette belle personne très avenante, très conciliante et très serviable.\nJe recommande.',
        customerImg: require('~/assets/img/avatars/avatar-leonid256x256.jpg')
      }
    ]
  })
}
</script>

<style></style>
