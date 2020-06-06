<template>
  <!-- <div class="flex flex-col">
    <nuxt-link :to="'/articles/' + article.slug">
      <img class="w-full h-56" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {{ article.title }}
        </div>
        <p class="text-gray-700 text-base truncate">
          {{ article.content }}
        </p>
      </div>
    </nuxt-link>
    <div class="flex-1 flex flex-wrap justify-center items-start my-4">
      <span v-for="category in article.categories" :key="category.id" class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 m-1 py-1 px-2">
        <article-category-pill :name="category.name" :slug="category.slug" />
      </span>
    </div>
  </div> -->
  <nuxt-link :to="'/articles/' + article.slug">
    <div class="pb-16 sm:px-6 md:px-24 md:max-w-screen-xl">
      <div class="flex flex-col md:flex-row items-start justify-center">
        <div class="md:mr-6 md:rounded-sm h-48 w-full object-cover md:w-9/12 md:max-w-xs overflow-hidden">
          <img class=" md:rounded-sm object-cover w-full h-auto lazyload" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
        </div>
        <div class="px-6 sm:py-0 py-8">
          <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 ">
            {{ article.title }}
          </h3>
          <div class="mt-6 text-base leading-6 text-gray-500">
            <p>{{ shorten(article.content, 180) }} ...</p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
// import ArticleCategoryPill from '~/components/ArticleCategoryPill.vue'

export default {
  components: {
    // ArticleCategoryPill
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      assetsBaseUrl: process.env.assetsBaseUrl
    }
  },
  methods: {
    // Shorten a string to less than maxLen characters without truncating words.
    shorten(str, maxLen, separator = ' ') {
      if (str.length <= maxLen) return str
      return str.substr(0, str.lastIndexOf(separator, maxLen))
    }
  }
}
</script>

<style></style>
