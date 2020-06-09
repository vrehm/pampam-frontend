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
        <journal-inline-error-block :error="$fetchState.error" />
      </template>
      <template v-else>
        <div class="flex flex-col relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl justify-center items-center">
          <article-show-hero-section :article="article" />
          <div class="article text-gray-700 text-base break-normal my-4 leading-loose mx-auto max-w-4xl" v-html="$md.render(article.content)"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import JournalInlineErrorBlock from '~/components/JournalInlineErrorBlock.vue'
import ArticleShowHeroSection from '~/components/ArticleShowHeroSection.vue'

export default {
  components: {
    JournalInlineErrorBlock,
    ArticleShowHeroSection
  },
  props: [],
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios
    // const article = await fetch(`https://dev.to/api/articles/${this.$route.params.article}`).then((res) => res.json())
    const article = await this.$axios.$get(baseURL + `/articles/${this.$route.params.article}`)
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
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
  head() {
    return {
      title: this.article.title
    }
  }
}
</script>

<style>
.article img {
  margin-top: 32px;
  margin-bottom: 32px;
  max-width: 28rem;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.2rem;
}
</style>
