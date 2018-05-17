<template>
  <div>
    <h1>Create Page</h1>
    <p>User: {{ firstName }}</p>
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
      firstName: 'getFirstName',
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
    // firstName() {
    //   return this.$store.getters.getFirstName
    // },
    // categoriesLength() {
    //   return this.$store.getters.getCategoriesLength
    // }
  }
}
</script>

<style>
</style>
