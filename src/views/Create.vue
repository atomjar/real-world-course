<template>
  <div>
    <h1>Create Page</h1>
    <p>User: {{ userName }}</p>

    <ul>
      <li v-for="category in categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Create',
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    categories() {
      return this.$store.state.categories
    }
  }
}
</script>

<style>
</style>
