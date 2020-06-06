<template>
  <!-- <div class="flex flex-col">
    <nuxt-link :to="'/articles/' + article.slug">
      <img class="w-full h-56" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {{ article.title }}
        </div>
        <p class="text-gray-700 text-base truncate">
          {{ article.content }}
        </p>
      </div>
    </nuxt-link>
    <div class="flex-1 flex flex-wrap justify-center items-start my-4">
      <span v-for="category in article.categories" :key="category.id" class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 m-1 py-1 px-2">
        <article-category-pill :name="category.name" :slug="category.slug" />
      </span>
    </div>
  </div> -->
  <div class="">
    <div class="pb-16 sm:px-6 lg:px-24 lg:max-w-screen-xl">
      <div class="flex flex-col lg:flex-row items-start justify-center">
        <img class=" lg:mr-6 lg:rounded-sm h-48 w-full object-cover lg:w-10/12 lazyload lg:max-w-xs" src="~/assets/img/journal/journal-placeholder.jpg" />
        <div class="px-6 sm:py-0 py-8">
          <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 ">
            Manage subscription
          </h3>
          <div class="mt-6 text-base leading-6 text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ArticleCategoryPill from '~/components/ArticleCategoryPill.vue'

export default {
  components: {
    // ArticleCategoryPill
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      assetsBaseUrl: process.env.assetsBaseUrl
    }
  }
}
</script>

<style></style>
