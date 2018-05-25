<template>
  <div>
    <h1>Create Page</h1>

    <form  @submit.prevent="addEvent(event)">
    <!-- <form  @submit.prevent="ADD_EVENT(event)"> -->
      <h2>Tell us about your event</h2>

      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <input v-model="event.title" type="text" placeholder="Add an event title"/>
      <input v-model="event.description" type="text" placeholder="Add a description"/>

      <h3>Where is your event?</h3>
      <input v-model="event.location" type="text" placeholder="Add a location"/>

      <h3>When is your event?</h3>

      <datepicker v-model="event.date" placeholder="Select a date"/>

      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>

      <input type="submit" value="Submit"/>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Create',
  components: {
    Datepicker
  },
  data() {
    return {
      event: {
        category: '',
        organizer: {},
        title: '',
        description: '',
        location: '',
        date: '',
        time: ''
      },
      categories: [],
      times: []
    }
  },
  computed: {
    ...mapGetters({
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
  },
  created() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
  },
  mounted() {
    this.event.organizer = this.$store.state.user
    this.categories = this.$store.state.categories
  },
  methods: {
    // ...mapMutations(['ADD_EVENT'])
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
    }
  }
}
</script>

<style>
</style>
