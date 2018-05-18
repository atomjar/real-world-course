<template>
  <div>
    <h1>Create Page</h1>

    <form  @submit.prevent="ADD_EVENT(event)">
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

    <snackbar v-if="success">
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">Your event has been created.</p>
    </snackbar>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: 'Create',
  components: {
    Datepicker,
    Snackbar
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
      searchCategories: 'getCategoryByString',
      lastEvent: 'getLastEvent'
    }),
    success() {
      console.log('success', this.lastEvent)
      if (this.lastEvent === this.event) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    newEvent() {
      this.success = true
    }
  },
  created() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i)
    }
    times.map(time => {
      time += ':00'
      this.times.push(time)
    })
  },
  mounted() {
    this.event.organizer = this.$store.state.user
    this.categories = this.$store.state.categories
  },
  methods: {
    ...mapMutations(['ADD_EVENT'])
  }
}
</script>

<style>
</style>
