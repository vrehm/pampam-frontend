<template>
  <div class="flex flex-col items-center px-2 sm:px-6 md:px-8 lg:px-6 xl:px-10">
    <div class="flex flex-col items-center">
      <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
        <img class="h-20 w-20 rounded-full lazyload" :data-src="customerImg" :alt="'Photo de ' + name" />
      </div>
      <div class="mt-4">
        <div class="text-lg leading-6 font-semibold text-gray-900">
          {{ name }}
        </div>
      </div>
    </div>

    <div class="mt-8">
      <p class="text-center text-base leading-6 text-gray-800">
        <svg class="inline-block transform -translate-x-1 -translate-y-1 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        {{ testimony }}
        {{ testimony2 }}
        <svg class="inline-block transform rotate-180 translate-x-1 translate-y-1 h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    testimony: {
      type: String,
      required: true
    },
    testimony2: {
      type: String,
      required: true
    },
    customerImg: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
