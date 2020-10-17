<template>
  <section class="">
    <div class="max-w-lg md:max-w-screen-xl mx-auto sm:pb-6 px-8 sm:px-6 md:px-12 xl:px-8">
      <h3 class="text-left text-xl sm:text-2xl font-extrabold  tracking-tight text-yellow-500">
        Paroles de clients
      </h3>
      <VueSlickCarousel v-bind="settings" @init="initHandler">
        <testimonial-card v-for="customer in customers" :key="customer.id" class="focus:outline-none py-20 font-light" :name="customer.name" :testimony="customer.testimony" :testimony2="customer.testimony2" :customer-img="customer.customerImg" :product-img="customer.productImg" :product-name="customer.productName" />
        <template #prevArrow="arrowOption">
          <div class="custom-prev-arrow">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-next-arrow">{{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}</div>
        </template>
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
      speed: 2200,
      swipeToSlide: true,
      autoplay: true,
      focusOnSelect: true,
      responsive: []
    },
    responsiveSettings: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    areResonsiveSettingsApplied: false,
    customers: [
      {
        name: 'Lilubelle Jh',
        testimony: 'Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra-abordables !',
        testimony2: 'Belle continuation.',
        productName: 'une table',
        customerImg: require('~/assets/img/avatars/avatar-lilubelle256x256.jpg'),
        productImg: require('~/assets/img/home/product-test1.jpg')
      },
      {
        name: 'Dorian Pillot',
        testimony: "Un lieu superbe et des objets riches d'histoires...",
        testimony2: '',
        productName: 'une chaise',
        customerImg: require('~/assets/img/avatars/avatar-dorian256x256.jpg'),
        productImg: require('~/assets/img/home/product-test2.jpg')
      },
      {
        name: 'Leonid Von Ciesielski',
        testimony: 'Multi merci pour cette belle personne très avenante, très conciliante et très serviable.',
        testimony2: 'Je recommande.',
        productName: 'une table',
        customerImg: require('~/assets/img/avatars/avatar-leonid256x256.jpg'),
        productImg: require('~/assets/img/home/product-test1.jpg')
      }
      // {
      //   name: 'Lilubelle Jh',
      //   testimony: 'Que du bon goût, un accueil toujours adorable et souriant et des petites merveilles en déco à des prix supra-abordables !',
      //   testimony2: 'Belle continuation.',
      //   productName: 'une table',
      //   customerImg: require('~/assets/img/avatars/avatar-lilubelle256x256.jpg'),
      //   productImg: require('~/assets/img/home/product-test2.jpg')
      // },
      // {
      //   name: 'Dorian Pillot',
      //   testimony: "Un lieu superbe et des objets riches d'histoires...",
      //   testimony2: '',
      //   productName: 'une table',
      //   customerImg: require('~/assets/img/avatars/avatar-dorian256x256.jpg'),
      //   productImg: require('~/assets/img/home/product-test2.jpg')
      // },
      // {
      //   name: 'Leonid Von Ciesielski',
      //   testimony: 'Multi merci pour cette belle personne très avenante, très conciliante et très serviable.',
      //   testimony2: 'Je recommande.',
      //   productName: 'une table',
      //   customerImg: require('~/assets/img/avatars/avatar-leonid256x256.jpg'),
      //   productImg: require('~/assets/img/home/product-test1.jpg')
      // }
    ]
  }),
  methods: {
    initHandler() {
      if (this.areResonsiveSettingsApplied === false) {
        this.applyResponsiveSettings()
      }
    },
    applyResponsiveSettings() {
      this.settings.responsive = this.responsiveSettings
      this.areResonsiveSettingsApplied = true
    }
  }
}
</script>

<style>
.custom-prev-arrow::before {
  content: '\002039' !important;
  font-family: monospace !important;
  font-size: 50px !important;
  @apply text-gray-900 !important;
}

.custom-next-arrow::before {
  content: '\00203A' !important;
  font-family: monospace !important;
  font-size: 50px !important;
  @apply text-gray-900 !important;
}
</style>
