<template>
  <div>
    <div class=" max-w-screen-xl mx-auto rounded-sm">
      <h2 class="mr-2 sm:mr-4 text-center sm:text-left font-headings text-3xl sm:text-4xl lg:text-5xl leading-8 sm:leading-9 tracking-tight text-gray-900 px-8">
        Ils parlent de Pam Pam
      </h2>
      <home-presse />
      <home-testimonials />
    </div>
  </div>
</template>

<script>
import HomeTestimonials from '~/components/HomeTestimonials.vue'
import HomePresse from '~/components/HomePresse.vue'
export default {
  components: {
    HomeTestimonials,
    HomePresse
  }
}
</script>

<style></style>
