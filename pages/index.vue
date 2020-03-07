<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-start mt-4 mb-16">
      <h2 class="text-4xl m-2 w-full">
        Nuxt blog test @Bivwak!
      </h2>

      <div
        v-for="category in categories"
        :key="category.id"
        class="w-full flex flex-wrap justify-start m-2"
      >
        <span class="text-2xl w-full my-2">{{ category.name }}</span>
        <div v-for="article in category.articles" :key="article.id">
          <article-card
            :article="articles[article.id - 1]"
            class="max-w-xs rounded overflow-hidden shadow-lg m-2"
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
    const articles = await $axios.$get(baseURL + '/articles/')
    const categories = await $axios.$get(baseURL + '/categories/')
    return { articles, categories }
  }
}
</script>

<style></style>
