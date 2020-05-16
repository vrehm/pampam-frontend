<template>
  <div class="container mx-auto my-4">
    <nuxt-link to="/" class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      Back to homepage
    </nuxt-link>
    <div class="flex flex-wrap justify-center mt-4 mb-16">
      <h2 class="text-4xl m-2 w-full text-center">
        <span>{{ article.title }}</span>
      </h2>

      <article-show class="max-w-screen-md" :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleShow from '~/components/ArticleShow.vue'

export default {
  components: {
    ArticleShow,
  },
  async asyncData({ $axios, params }) {
    const {
      defaults: { baseURL },
    } = $axios
    const slug = params.slug
    let article = await $axios.$get(baseURL + '/articles/?slug=' + slug)
    const slugifiedArticle = article[0]
    article = slugifiedArticle
    return { article }
  },
}
</script>

<style></style>
