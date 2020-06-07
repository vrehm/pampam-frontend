<template>
  <div class="my-4">
    <img :src="assetsBaseUrl + article.image.url" :alt="article.title" />
    <div class="text-gray-700 text-base break-normal my-4 leading-loose">
      {{ article.content }}
    </div>
    <div class="flex justify-center items-end my-4">
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
  props: [],
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios
    // const article = await fetch(`https://dev.to/api/articles/${this.$route.params.article}`).then((res) => res.json())
    const article = await this.$axios.$get(baseURL + `/articles/${this.$route.params.id}`)

    if (article.id) {
      this.article = article
      this.$store.commit('SET_CURRENT_ARTICLE', this.article)
    } else {
      // set status code on server
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404
      }
      // throwing an error will set $fetchState.error
      throw new Error('Article not found')
    }
  },
  data() {
    return {
      assetsBaseUrl: process.env.assetsBaseUrl,
      article: {}
    }
  }
}
</script>

<style></style>
