<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <div class="flex-shrink-0 inline-flex rounded-full border-2 border-white">
        <img class="h-20 w-20 rounded-full lazyload" :data-src="customerImg" :alt="'Photo de ' + name" />
      </div>
      <div class="mt-4">
        <div class="text-base leading-6 font-medium text-white">
          {{ name }}
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8 relative text-lg leading-7 font-medium text-white">
      <p class="flex justify-around relative text-center text-base leading-6 text-gray-100">
        <svg class="transform -translate-x-0 -translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <span class="whitespace-pre-line px-4">
          {{ testimony }}
        </span>
        <svg class="self-end transform rotate-180 translate-x-0 translate-y-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 32 32">
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
    customerImg: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
