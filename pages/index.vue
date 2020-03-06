<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-start mt-4 mb-16">
      <h2 class="text-4xl m-2 w-full">
        Nuxt blog test @Bivwak!
      </h2>

      <div
        v-for="article in articles"
        :key="article.id"
        class="max-w-xs rounded overflow-hidden shadow-lg m-2"
      >
        <img
          class="w-full h-56"
          :src="assetsBaseUrl + article.image.url"
          :alt="article.title"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ article.title }}</div>
          <p class="text-gray-700 text-base truncate">
            {{ article.content }}
          </p>
        </div>
        <div class="flex justify-center items-end my-4">
          <span
            v-for="category in article.categories"
            :key="category.id"
            class="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 m-1 py-1 px-2"
          >
            {{ category.name }}
          </span>
        </div>
      </div>

      <!-- <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const {
      defaults: { baseURL }
    } = $axios
    const articles = await $axios.$get(baseURL + '/articles/')
    const assetsBaseUrl = process.env.assetsBaseUrl
    return { articles, baseURL, assetsBaseUrl }
  }
}
</script>

<style></style>
