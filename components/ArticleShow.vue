<template>
  <div class="relative pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 w-full">
    <div class="mt-10 mx-auto max-w-screen-xl lg:px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <template v-if="$fetchState.pending">
        <content-placeholders rounded class="pb-8 px-6 md:px-24 md:max-w-5xl  md:px-24 mx-auto w-4/5">
          <content-placeholders-heading :img="true" />
          <content-placeholders-img />
          <content-placeholders-text :lines="20" />
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
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  }
}
</script>

<style></style>
