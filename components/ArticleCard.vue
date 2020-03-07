<template>
  <div>
    <nuxt-link :to="'/articles/' + article.id">Show Article</nuxt-link>
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
</template>

<script>
export default {
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
  }
}
</script>

<style></style>
