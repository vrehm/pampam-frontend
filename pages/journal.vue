<template>
  <div>
    <div class="relative overflow-hidden">
      <journal-hero-section />
      <div class="relative pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="mt-10 mx-auto max-w-screen-xl lg:px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <article-card v-for="article in articles" :key="article.id" :article="article" class="flex" />
        </div>
        <the-more-article-button v-if="articlesCount > 5" @load-articles="fiveMoreArticles" />
      </div>
    </div>
  </div>
  <!-- <div class="pt-16 lg:pt-32">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-start mt-4 mb-16">
        <div class="w-full flex justify-between items-center">
          <h2 class="text-4xl m-2 flex-1">
            Nuxt blog test @Bivwak!
          </h2>
          <nuxt-link to="/articles/" class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            See all Articles
          </nuxt-link>
        </div>

        <div v-for="category in categories" :key="category.id" class="w-full flex flex-wrap justify-start m-2">
          <div class="w-full">
            <nuxt-link :to="'/categories/' + category.slug">
              <span class="text-2xl w-full my-2">{{ category.name }}</span>
            </nuxt-link>
          </div>
          <div v-for="article in category.articles" :key="article.id" class="flex">
            <article-card :article="articles[article.id - 1]" class="max-w-xs rounded overflow-hidden shadow-lg m-2 flex-1" />
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import JournalHeroSection from '~/components/JournalHeroSection.vue'
import ArticleCard from '~/components/ArticleCard.vue'
import TheMoreArticleButton from '~/components/TheMoreArticleButton.vue'

export default {
  components: {
    JournalHeroSection,
    ArticleCard,
    TheMoreArticleButton
  },
  // async asyncData({ $axios }) {
  //   const {
  //     defaults: { baseURL }
  //   } = $axios
  //   const articles = await $axios.$get(baseURL + '/articles?_sort=id:ASC&_limit=5')
  //   const categories = await $axios.$get(baseURL + '/categories?_sort=id:ASC')
  //   const articlesCount = await $axios.$get(baseURL + '/articles/count')
  //   const categoriesCount = await $axios.$get(baseURL + '/categories/count')

  //   return { articles, categories, articlesCount, categoriesCount, baseURL }
  // },
  async fetch() {
    // const articles = await fetch(`https://dev.to/api/articles?tag=nuxt&state=rising&page=${this.currentPage}`).then((res) => res.json())
    const articles = await this.axios.get(this.baseURL + '/articles?_sort=id:ASC&_limit=5')
    this.articles = this.articles.concat(articles)
  },
  data() {
    return {
      currentPage: 1,
      articles: []
    }
  },
  methods: {
    // Shorten a string to less than maxLen characters without truncating words.
    async fiveMoreArticles() {
      const newArticles = await this.$axios.$get(this.baseURL + '/articles?_start=10&_limit=5')
      this.articles.push(...newArticles)
    }
  }
}
</script>

<style></style>
