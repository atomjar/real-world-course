<template>
  <div>
    <h1>Create Page</h1>
    <p>User: {{ name }}</p>
    <p>Amount of categories: {{ categoryLength }}</p>
    <p>{{ searchCategories('nature')}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Create',
  computed: {
    username() {
      return this.$store.state.user
    },
    ...mapGetters({
      firstName: 'getUserName',
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
    // userName() {
    //   return this.$store.getters.getUserName
    // },
    // categoriesLength() {
    //   return this.$store.getters.getCategoriesLength
    // }
  }
}
</script>

<style>
</style>