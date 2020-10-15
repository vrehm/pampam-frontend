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
        {
          hid: 'description',
          name: 'description',
          content: `${this.article.title} - blog de l'Atelier Pam Pam`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.article.title}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.article.content}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.image.formats.thumbnail.url
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://atelierpampam.fr/articles/' + this.article.slug
            },
            headline: this.article.title,
            image: this.article.image.url,
            datePublished: this.article.published_at
          }),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style></style>
