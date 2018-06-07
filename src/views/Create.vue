<template>
  <div>
    <h1>Create Page</h1>

    <form  @submit.prevent="addEvent(event)">
      <h2>Tell us about your event</h2>

      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
// import { mapGetters } from 'vuex'

export default {
  name: 'Create',
  components: {
    Datepicker
  },
  data() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createNewEvent(),
      categories: this.$store.state.categories,
      times
    }
  },
  // computed: {
  // username() {
  //   return this.$store.state.user
  // },
  //   ...mapGetters({
  //     categoryLength: 'getCategoriesLength',
  //     searchCategories: 'getCategoryByString'
  //   })
  // },
  methods: {
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
      this.event = this.createNewEvent()
    },
    createNewEvent() {
      const user = this.$store.state.user
      return {
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: {
          [user.id]: user.name
        }
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
