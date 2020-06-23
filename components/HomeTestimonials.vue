<template>
  <section class="bg-gray-100">
    <div class="max-w-lg md:max-w-screen-xl mx-auto sm:pb-6 px-8 sm:px-6 md:px-12 xl:px-8">
      <VueSlickCarousel v-bind="settings">
        <testimonial-card v-for="customer in customers" :key="customer.id" class="focus:outline-none py-20" :name="customer.name" :testimony="customer.testimony" :testimony2="customer.testimony2" :customer-img="customer.customerImg" />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import TestimonialCard from '~/components/TestimonialCard.vue'

export default {
  components: {
    VueSlickCarousel,
    TestimonialCard
  },
  data: () => ({
    settings: {
      lazyLoad: 'ondemand',
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      speed: 1500,
      swipeToSlide: true,
      autoplay: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    customers: [
      {
        name: 'Lilubelle Jh',
        testimony: 'Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra-abordables !',
        testimony2: 'Belle continuation.',
        customerImg: require('~/assets/img/avatars/avatar-lilubelle256x256.jpg')
      },
      {
        name: 'Dorian Pillot',
        testimony: "Un lieu superbe et des objets riches d'histoires...",
        testimony2: '',
        customerImg: require('~/assets/img/avatars/avatar-dorian256x256.jpg')
      },
      {
        name: 'Leonid Von Ciesielski',
        testimony: 'Multi merci pour cette belle personne très avenante, très conciliante et très serviable.',
        testimony2: 'Je recommande.',
        customerImg: require('~/assets/img/avatars/avatar-leonid256x256.jpg')
      },
      {
        name: 'Lilubelle Jh',
        testimony: 'Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra-abordables !',
        testimony2: 'Belle continuation.',
        customerImg: require('~/assets/img/avatars/avatar-lilubelle256x256.jpg')
      },
      {
        name: 'Dorian Pillot',
        testimony: "Un lieu superbe et des objets riches d'histoires...",
        testimony2: '',
        customerImg: require('~/assets/img/avatars/avatar-dorian256x256.jpg')
      },
      {
        name: 'Leonid Von Ciesielski',
        testimony: 'Multi merci pour cette belle personne très avenante, très conciliante et très serviable.',
        testimony2: 'Je recommande.',
        customerImg: require('~/assets/img/avatars/avatar-leonid256x256.jpg')
      }
    ]
  })
}
</script>

<style></style>
