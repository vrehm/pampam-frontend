<template>
  <!-- <div class="container mx-auto my-4">
    <nuxt-link to="/" class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      Back to homepage
    </nuxt-link>
    <div class="flex flex-wrap justify-center mt-4 mb-16">
      <h2 class="text-4xl m-2 w-full text-center">
        <span>{{ article.title }}</span>
      </h2>

      <article-show class="max-w-screen-md" :article="article" />
    </div>
  </div> -->
  <div class="container mx-auto my-4">
    <div class="flex flex-wrap justify-center mt-4 mb-16">
      <article-show />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleShow from '~/components/ArticleShow.vue'

export default {
  scrollToTop: true,
  components: {
    ArticleShow
  },
  computed: {
    ...mapState({
      article: (state) => state.currentArticle
    })
  },
  head() {
    return {
      title: `${this.article.title} - Journal de l'Atelier Pampam`,
      meta: [
        { hid: 'description', name: 'description', content: 'Atelier Pampam - Le Journal' },
        {
          property: 'og:title',
          content: `${this.article.title}`
        },
        {
          property: 'og:description',
          content: `${this.article.content}`
        },
        {
          property: 'og:image',
          content: this.article.image.formats.thumbnail.url
        }
      ]
    }
  }
}
</script>

<style></style>
