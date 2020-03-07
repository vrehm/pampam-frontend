<template>
  <div class="container mx-auto my-4">
    <nuxt-link to="/">Back to index</nuxt-link>
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
    ArticleShow
  },
  async asyncData({ $axios, params }) {
    const {
      defaults: { baseURL }
    } = $axios
    const id = params.id
    const article = await $axios.$get(baseURL + '/articles/' + id)
    return { article }
  }
}
</script>

<style></style>
