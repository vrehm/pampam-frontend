<template>
  <!-- <div class="relative md:flex">
    <div class="w-6/12">
      <img class="w-full h-full object-cover" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
    </div>
    <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
          Award winning support
        </div>
        <h2 class="mt-2 text-gray-900 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
          We’re here to help
        </h2>
        <p class="mt-3 text-lg leading-7 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Visit the help center
              <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="py-8">
    <h1 class="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
      {{ article.title }}
    </h1>
    <div class="flex-shrink-0 group block">
      <div class="flex items-center">
        <div>
          <img class="inline-block h-8 w-8 rounded-full border border-yellow-500" :src="article.author.avatar.formats.small.url" :alt="article.author.avatar.alternativeText" />
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

  <!-- <div class="lg:pb-16 overflow-hidden ">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <div class="relative lg:mt-12 sm:mt-16 lg:mt-24">
        <div class="flex flex-col-reverse lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <div class="flex">
              <nuxt-link v-for="(category, index) in article.categories.slice(0, 5)" :key="category.id" :to="{ name: 'categories-category', params: { category: category.slug } }">
                <p class="hover:underline text-sm leading-5 font-medium text-yellow-600" :class="{ 'ml-2': index != 0 }">
                  {{ category.name }}
                </p>
              </nuxt-link>
            </div>
            <h1 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9 mb-8">
              {{ article.title }}
            </h1>
            <div class="flex-shrink-0 group block self-end">
              <div class="flex items-center">
                <div>
                  <img class="inline-block h-8 w-8 rounded-full" :src="article.author.avatar.formats.small.url" :alt="article.author.avatar.alternativeText" />
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
                          .fromNow()
                      "
                    ></time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mx-auto w-full lg:max-w-md">
            <img class="object-cover lazyload  rounded-sm w-full" :src="assetsBaseUrl + article.image.url" :alt="article.title" />
          </div>
        </div>
      </div>
    </div>
  </div> -->
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
