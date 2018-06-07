<template>
  <div>
    <h1>Create Page</h1>
    <p>User: {{ userName }}</p>
  </div>
</template>

<script>
export default {
  name: 'Create',
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>

<style>
</style>
