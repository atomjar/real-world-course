<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Vue World</router-link>
    <nav>
      <router-link to="/" class="nav-item">Events</router-link>
      <router-link to="/create" class="nav-item">Create an event</router-link>
      <router-link v-if="!loggedIn" to="/login">Login / Sign Up</router-link>
      <a v-else @click="logout">Log Out</a>
    </nav>
  </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
  name: 'NavBar',
  computed: {
    loggedIn() {
      if (this.$store.state.user !== null) {
        return true
      }
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.state.user = null
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>
</style>

