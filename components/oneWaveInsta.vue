<template>
  <div :class="containerClass">
    <slot name="loading" :loading="loading" />
    <slot v-for="(feed, index) in feeds" :index="index" :feed="feed" name="feeds" />
    <slot name="error" :error="error" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    /*
     * Instagram access token.
     */
    token: {
      type: String,
      required: true
    },
    /*
     * Instagram user id.
     */
    userId: {
      type: String,
      required: true
    },
    /*
     * Media Fields (see https://developers.facebook.com/docs/instagram-basic-display-api/reference/media#fields)
     */
    fields: {
      type: String,
      required: true
    },
    /*
     * Number of posts rendered.
     */
    count: {
      type: Number,
      default: 50
    },
    /*
     * Kinds of media to filter (Can be IMAGE, VIDEO, or CAROUSEL_ALBUM.).
     */
    mediatypes: {
      type: Array,
      required: true
    },
    // Class for container div
    containerClass: {
      type: String,
      default: '',
      required: false
    }
  },
  data: () => ({
    error: null,
    loading: false,
    feeds: []
  }),
  mounted() {
    this.getUserFeed()
  },
  methods: {
    getUserFeed() {
      const endpoint = 'https://graph.instagram.com/' + this.userId + '/media'
      this.loading = true

      axios
        .get(endpoint, {
          params: { access_token: this.token, fields: this.fields }
        })
        .then((response) => {
          this.loading = false

          if (response.status === 400) this.error = response.error.message

          if (response.status === 200) {
            for (const n in response.data.data) {
              if (this.mediatypes.includes(response.data.data[n].media_type)) {
                if (this.feeds.length >= this.count) {
                  return
                }

                const data = response.data.data[n]

                if (data.children) {
                  this.feeds.push({ id: 'reserved' })
                  const caption = data.caption
                  const children = data.children.data
                  delete data.children
                  for (let index = 0; index < children.length; index++) {
                    const child = children[index].id
                    const endpoint = 'https://graph.instagram.com/' + child

                    axios
                      .get(endpoint, {
                        params: {
                          access_token: this.token,
                          fields: 'media_url,media_type'
                        }
                      })
                      .then((response) => {
                        const igChild = response.data
                        if (igChild.media_type === 'IMAGE') {
                          igChild.caption = caption
                          this.feeds.push(igChild)
                        }
                      })
                  }
                } else {
                  this.feeds.push(data)
                }
              }
            }
          }
        })
        .catch((error) => {
          throw error
        })
    }
  }
}
</script>
