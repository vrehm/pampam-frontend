<template>
  <div class="my-4">
    <template v-if="$fetchState.pending">
      <content-placeholders rounded>
        <content-placeholders-heading />
        <content-placeholders-img />
        <content-placeholders-text :lines="50" />
      </content-placeholders>
    </template>
    <template v-else-if="$fetchState.error">
      <p>{{ $fetchState.error }}</p>
    </template>
    <template v-else>
      <img :src="assetsBaseUrl + article.image.url" :alt="article.title" />
      <div class="text-gray-700 text-base break-normal my-4 leading-loose mx-auto max-w-4xl">
        {{ article.content }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: [],
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios
    // const article = await fetch(`https://dev.to/api/articles/${this.$route.params.article}`).then((res) => res.json())
    const article = await this.$axios.$get(baseURL + `/articles/${this.$route.params.article}`)
    if (article.id) {
      this.article = article
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
