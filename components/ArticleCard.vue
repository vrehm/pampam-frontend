<template>
  <div class="flex flex-col">
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
  </div>
</template>

<script>
import ArticleCategoryPill from '~/components/ArticleCategoryPill.vue'

export default {
  components: {
    ArticleCategoryPill
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
