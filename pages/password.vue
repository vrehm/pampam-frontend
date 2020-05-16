<template>
  <div class="container mx-auto flex justify-center items-center">
    <div v-if="isAuthorised">
      <h1 class="pb-4 text-2xl">Looks like you're already logged in</h1>

      <p class="pb-4 text-xl">
        Either logout or go to the password protected area
      </p>
      <div class="flex justify-between">
        <a class="text-gray-500 underline" href="/" @click="removeAuthorisation">Log out</a>
        <a class="text-gray-500 underline" href="/">Go to password protected area</a>
      </div>
    </div>
    <div v-else>
      <h1 class="pb-4 text-2xl">Log in</h1>
      <p class="pb-4 text-xl">
        Enter in your password, you can do so by filling in the form below.
      </p>

      <div>
        <form class="flex justify-between">
          <input v-model="methodLoginValue" class="w-2/3" type="password" placeholder="Your password for the method login approach" />

          <a class="text-gray-500 underline" href="/" @click="loginUser()">Login</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodLoginValue: '',
      isAuthorised: false,
    }
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised()
  },

  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.methodLoginValue)
      this.isAuthorised = this.$passwordProtect.isAuthorised()
      this.$router.push('/')
    },
    removeAuthorisation() {
      this.$passwordProtect.removeAuthorisation()
      this.isAuthorised = this.$passwordProtect.isAuthorised()
    },
  },
}
</script>

<style></style>
