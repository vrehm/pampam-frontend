<template>
  <div class="mx-auto w-auto py-8">
    <div class="sm:hidden px-2">
      <h2 class="mb-3 text-sm leading-5 font-light font-medium text-gray-700 group-hover:text-gray-900">Categories</h2>
      <select aria-label="Selected tab" class="form-select block w-full">
        <nuxt-link no-prefetch :to="{ name: 'journal' }" tag="option">
          Tous
        </nuxt-link>
        <nuxt-link v-for="category in categories" :key="category.id" tag="option" no-prefetch :to="{ name: 'categories-category', params: { category: category.slug } }">
          {{ category.name }}
        </nuxt-link>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex justify-center">
        <nuxt-link no-prefetch class="px-3 py-2 font-light font-bold text-sm leading-5 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100" :to="{ name: 'journal' }">
          Tous
        </nuxt-link>
        <nuxt-link v-for="category in categories" :key="category.id" no-prefetch class="ml-4 px-3 py-2 font-light font-bold text-sm leading-5 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-100" :to="{ name: 'categories-category', params: { category: category.slug } }">
          {{ category.name }}
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const {
      defaults: { baseURL }
    } = this.$axios

    const categories = await this.$axios.$get(baseURL + `/categories`)
    this.categories = categories
  },
  data() {
    return {
      categories: []
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply outline-none text-gray-700 bg-gray-100;
}
</style>
