<template>
  <div>
    <div class="relative">
      <journal-hero-section
        v-observe-visibility="{
          callback: journalHeroVisibilityChanged
        }"
      />

      <!-- Articles list -->
      <div class="relative pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-yellow-100">
        <div class="pt-10 mx-auto max-w-screen-xl lg:px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 xl:pt-28">
          <!-- Pending state for fetch -->
          <template v-if="$fetchState.pending">
            <div>
              <content-placeholders v-for="p in 5" :key="p" rounded class="pb-8 px-6 md:px-24 md:max-w-5xl mx-auto">
                <content-placeholders-heading :img="true" />
                <content-placeholders-text :lines="3" />
              </content-placeholders>
            </div>
          </template>

          <!-- Error state for fetch -->
          <template v-else-if="$fetchState.error">
            <p>{{ $fetchState.error.message }}</p>
          </template>

          <!-- Rendering articles -->
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
  scrollToTop: true,
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
    },
    journalHeroVisibilityChanged(isVisible) {
      this.$nuxt.$emit('journal-hero-invisible', isVisible)
    }
  },
  head() {
    return {
      title: "Journal de l'Atelier Pampam",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Le journal de l'Atelier Pampam, découvrez ici mes derniers articles."
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://atelierpampam.fr/journal',
            name: "Les articles du blog de l'Atelier Pam Pam",
            url: 'https://atelierpampam.fr/journal'
          }),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style></style>
