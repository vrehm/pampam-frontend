<template>
  <div class="my-4">
    <img :src="assetsBaseUrl + article.image.url" :alt="article.title" />
    <div class="text-gray-700 text-base break-normal my-4 leading-loose">
      {{ article.content }}
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
