<template>
  <nuxt-link :to="{ name: 'articles-article', params: { article: article.id } }" tag="article">
    <div class="pb-16 sm:px-6 md:px-24 md:max-w-screen-xl">
      <div class="flex flex-col md:flex-row items-start justify-center">
        <div class="md:mr-6 md:rounded-sm h-48 w-full object-cover md:w-9/12 md:max-w-xs overflow-hidden">
          <img class=" md:rounded-sm object-cover w-full h-auto lazyload" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
        </div>
        <div class="px-6 sm:py-0 py-8">
          <div class="flex justify-between">
            <div class="flex">
              <!-- Slice method limit the number of tags displayed -->
              <nuxt-link v-for="(category, index) in article.categories.slice(0, 5)" :key="category.id" :to="{ name: 'categories-category', params: { category: category.slug } }">
                <p class="hover:underline text-sm leading-5 font-medium text-yellow-600" :class="{ 'ml-2': index != 0 }">
                  {{ category.name }}
                </p>
              </nuxt-link>
            </div>

            <p class="font-light text-sm leading-5 text-gray-500">
              <time
                :datetime="article.created_at"
                v-text="
                  $moment(article.created_at)
                    .locale('fr')
                    .fromNow()
                "
              ></time>
            </p>
          </div>
          <nuxt-link :to="{ name: 'articles-article', params: { article: article.id } }">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ article.title }}
            </h3>
          </nuxt-link>
          <div class="mt-3 font-light text-base leading-6 text-gray-900">
            <p>{{ shorten(article.content, 180) }} ...</p>
          </div>
          <div class="mt-3">
            <nuxt-link :to="{ name: 'articles-article', params: { article: article.id } }">
              <p class="text-base leading-6 font-semibold text-yellow-600 hover:text-yellow-500 transition ease-in-out duration-150">
                Lire l'article
              </p>
            </nuxt-link>
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
