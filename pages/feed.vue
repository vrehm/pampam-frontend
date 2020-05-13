<template>
  <oneWaveInsta
    :token="token"
    :user-id="userId"
    fields="media_url,media_type,caption,children"
    :mediatypes="['IMAGE', 'CAROUSEL_ALBUM']"
    :count="16"
  >
    <template v-slot:loading="props">
      <h1 v-if="props.loading" class="fancy-loading">
        Loading, please wait...
      </h1>
    </template>

    <template v-slot:feeds="props">
      <div v-if="props.feed.id != 'reserved'">
        <img :src="props.feed.media_url" />
        <div :text="props.feed.caption" />
        <div v-if="props.feed.children">
          <div
            v-for="(child, index) in props.feed.children.data"
            :key="index"
            :child="child"
          >
            <span>{{ child.id }}</span>
          </div>
        </div>
      </div>
    </template>

    <template v-slot:error="props">
      <div class="fancy-alert">
        {{ props.error }}
      </div>
    </template>
  </oneWaveInsta>
</template>

<script>
import oneWaveInsta from '~/components/oneWaveInsta.vue'

export default {
  components: {
    oneWaveInsta
  },
  data: () => ({
    token: process.env.IG_TOKEN,
    userId: process.env.IG_USER_ID
  })
}
</script>

<style></style>
