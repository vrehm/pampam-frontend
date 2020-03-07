<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-start mt-4 mb-16">
      <div class="w-full flex justify-between items-center">
        <h2 class="text-4xl m-2 flex-1">
          Nuxt blog test @Bivwak!
        </h2>
        <nuxt-link
          to="/articles/"
          class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          See all Articles
        </nuxt-link>
      </div>

      <div
        v-for="category in categories"
        :key="category.id"
        class="w-full flex flex-wrap justify-start m-2"
      >
        <div class="w-full">
          <nuxt-link :to="'/categories/' + category.slug">
            <span class="text-2xl w-full my-2">{{ category.name }}</span>
          </nuxt-link>
        </div>
        <div
          v-for="article in category.articles"
          :key="article.id"
          class="flex"
        >
          <article-card
            :article="articles[article.id - 1]"
            class="max-w-xs rounded overflow-hidden shadow-lg m-2 flex-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC')
    const categories = await $axios.$get(baseURL + '/categories?_sort=id:ASC')
    return { articles, categories }
  }
}
</script>

<style></style>
