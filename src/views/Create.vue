<template>
  <div>
    <h1>Create Page</h1>
    <p>User: {{ username }}</p>
  </div>
</template>

<script>
export default {
  name: 'Create',
  computed: {
    username() {
      return this.$store.state.user
    }
  }
}
</script>

<style>
</style>
