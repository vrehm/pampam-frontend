<template>
  <div class="container mx-auto ">
    <div class="flex flex-wrap justify-center mb-16">
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
      title: `Article ${this.article.title} - Journal de l'Atelier Pampam`,
      meta: [
        { hid: 'description', name: 'description', content: 'Atelier Pampam - Le Journal' }
        // {
        //   property: 'og:title',
        //   content: `${this.article.title}`
        // },
        // {
        //   property: 'og:description',
        //   content: `${this.article.content}`
        // },
        // {
        //   property: 'og:image',
        //   content: this.article.image.formats.thumbnail.url
        // }
      ]
    }
  }
}
</script>

<style></style>
