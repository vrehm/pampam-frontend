<template>
  <div class="mx-auto w-auto py-8 bg-yellow-100">
    <div class="sm:hidden px-2">
      <h2 class="mb-3 text-sm leading-5 font-light font-medium text-gray-700 group-hover:text-gray-900">Categories</h2>
      <select v-model="selected" aria-label="Selected tab" class="form-select block w-full outline-none focus:outline-none shadow-none" @change="onChange($event)">
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
        <nuxt-link no-prefetch class="px-3 py-2 font-light font-bold text-sm leading-5 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none" :to="{ name: 'journal' }">
          Tous
        </nuxt-link>
        <nuxt-link v-for="category in categories" :key="category.id" no-prefetch class="ml-4 px-3 py-2 font-light font-bold text-sm leading-5 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none" :to="{ name: 'categories-category', params: { category: category.slug } }">
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
  },

  //
  computed: {
    selected: {
      // getter
      get() {
        return this.$store.state.currentCategory.name
      },
      // setter
      set(newValue) {
        const category = { name: newValue }
        this.$store.commit('SET_CURRENT_CATEGORY', category)
      }
    }
  },
  methods: {
    async onChange(event) {
      const {
        defaults: { baseURL }
      } = this.$axios
      const name = event.target.value

      if (name === 'Tous') {
        // const category = { name: 'Tous' }
        // this.$store.commit('SET_CURRENT_CATEGORY', category)
        this.$router.push('/journal/')
      } else {
        const category = await this.$axios.$get(baseURL + `/categories` + '?name=' + name)
        // this.$store.commit('SET_CURRENT_CATEGORY', category[0])
        this.$router.push('/categories/' + category[0].slug)
      }
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply outline-none text-gray-100 bg-orange-300;
}

select,
option,
.nuxt-link,
select:focus,
option:focus,
.nuxt-link:focus {
  outline: 0 !important;
}
</style>
