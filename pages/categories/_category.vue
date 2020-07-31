<template>
  <div>
    <div class="relative ">
      <journal-hero-section />
      <div class="relative pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-yellow-100">
        <div class="pt-10 mx-auto max-w-screen-xl lg:px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 xl:pt-28">
          <template v-if="$fetchState.pending">
            <div>
              <content-placeholders v-for="p in 5" :key="p" rounded class="pb-8 px-6 md:px-24 md:max-w-5xl mx-auto">
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
  scrollToTop: true,
  components: {
    JournalHeroSection,
    ArticleCard
  },
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios

    const slug = this.$nuxt.context.params.category
    const category = await this.$axios.$get(baseURL + '/categories?slug=' + slug)
    this.$store.commit('SET_CURRENT_CATEGORY', category[0])

    const articles = await this.$axios.$get(baseURL + `/articles?_start=${this.articlesToBeDisplayed - 10}&_limit=10` + '&categories.id=' + category[0].id)
    const articlesCount = await this.$axios.$get(baseURL + `/articles/count` + '?categories.id=' + category[0].id)

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
  computed: {
    selected: {
      // getter
      get() {
        return this.$store.state.currentCategory
      },
      // setter
      set(newValue) {
        const category = { name: newValue }
        this.$store.commit('SET_CURRENT_CATEGORY', category)
      }
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
      title: `Catégorie ${this.selected.name} - Journal de l'Atelier Pampam`
      // meta: [
      //   { hid: 'description', name: 'description', content: 'Atelier Pampam - Le Journal' },
      //   {
      //     property: 'og:title',
      //     content: `${this.article.title}`
      //   },
      //   {
      //     property: 'og:description',
      //     content: `${this.article.content}`
      //   },
      //   {
      //     property: 'og:image',
      //     content: this.article.image.formats.thumbnail.url
      //   }
      // ]
    }
  }
}
</script>

<style></style>
