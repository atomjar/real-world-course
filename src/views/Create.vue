<template>
  <div>
    <h1>Create Page</h1>

    <p>User: {{ userName }}</p>
    <p>City: {{ userCity }}</p>

    <p>Amount of categories: {{ categoryLength }}</p>
    <p>{{ searchCategories('nature')}}</p>

    <ul>
      <li v-for="category in categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Create',
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    categories() {
      return this.$store.state.categories
    },
    ...mapGetters({
      userCity: 'getUserCity',
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