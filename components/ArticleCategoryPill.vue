<template>
  <nuxt-link :to="'/categories/' + slug">
    <span>{{ name }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
