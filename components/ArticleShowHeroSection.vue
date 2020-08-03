<template>
  <div class="py-8">
    <!-- Slice method limit the number of tags displayed -->
    <div class="flex">
      <nuxt-link v-for="(category, index) in article.categories.slice(0, 5)" :key="category.id" :to="{ name: 'categories-category', params: { category: category.slug } }">
        <div class="mb-3 hover:underline text-sm leading-5 font-medium text-orange-400" :class="{ 'ml-2': index != 0 }">
          {{ category.name }}
        </div>
      </nuxt-link>
    </div>
    <h1 class="mb-3 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
      {{ article.title }}
    </h1>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img class="inline-block h-8 w-8 rounded-full border border-orange-500" :src="processAvatar(article.author)" :alt="article.author.avatar.alternativeText" />
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900 ">
                {{ article.author.full_name }}
              </p>
              <p class="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                <time
                  :datetime="article.created_at"
                  v-text="
                    $moment(article.created_at)
                      .locale('fr')
                      .format('Do MMMM YYYY')
                  "
                ></time>
              </p>
            </div>
          </div>
        </div>
      </div>
      <article-show-hero-section-share-box :article="article" />
    </div>
    <div>
      <img class="py-8 object-cover w-full h-auto lazyload rounded-sm" :src="processImage(article.image)" :alt="article.title" />
    </div>
  </div>
</template>

<script>
import ArticleShowHeroSectionShareBox from '@/components/ArticleShowHeroSectionShareBox.vue'
export default {
  components: {
    ArticleShowHeroSectionShareBox
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
    processAvatar(author) {
      const thumbnail = author.avatar.formats.thumbnail.url
      if (thumbnail) {
        return this.assetsBaseUrl + thumbnail
      } else {
        return this.assetsBaseUrl + author.avatar.url
      }
    },
    processImage(image) {
      const breakpoints = ['large', 'medium', 'small']

      for (let index = 0; index < breakpoints.length; index++) {
        const breakpoint = breakpoints[index]
        const test = image.formats[breakpoint]

        if (test) return this.assetsBaseUrl + test.url
      }

      return this.assetsBaseUrl + image.url
    }
  }
}
</script>

<style></style>
