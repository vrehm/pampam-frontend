<template>
  <div>
    <div class="relative overflow-hidden">
      <journal-hero-section />
      <div class="relative pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="mt-10 mx-auto max-w-screen-xl lg:px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <template v-if="$fetchState.pending">
            <div>
              <content-placeholders v-for="p in 5" :key="p" rounded class="pb-8 px-6 md:px-24 md:max-w-5xl  md:px-24 mx-auto">
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="3" />
              </content-placeholders>
            </div>
          </template>
          <template v-else-if="$fetchState.error">
            <p>{{ $fetchState.error.message }}</p>
          </template>
          <template v-else>
            <div>
              <article-card v-for="(article, index) in articles" :key="article.id" v-observe-visibility="index === articles.length - 1 ? lazyLoadArticles : false" :article="article" class="flex" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JournalHeroSection from '~/components/JournalHeroSection.vue'
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  scrollToTop: false,
  components: {
    JournalHeroSection,
    ArticleCard
  },
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios

    const articles = await this.$axios.$get(baseURL + `/articles?_start=${this.articlesToBeDisplayed - 10}&_limit=10`)
    const articlesCount = await this.$axios.$get(baseURL + `/articles/count`)

    this.articles = this.articles.concat(articles)
    this.articlesAvailable = articlesCount
  },
  data() {
    return {
      articlesToBeDisplayed: 10,
      articles: [],
      articlesAvailable: 0
    }
  },
  methods: {
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.articlesToBeDisplayed < this.articlesAvailable) {
          this.articlesToBeDisplayed += 10
          this.$fetch()
        }
      }
    }
  },
  head() {
    return {
      title: "Journal de l'Atelier Pampam"
    }
  }
}
</script>

<style></style>
