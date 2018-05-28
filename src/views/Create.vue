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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Datepicker from 'vuejs-datepicker'

const EMPTY_EVENT = {
  category: '',
  organizer: {},
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  attendees: {}
}

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
        time: '',
        attendees: {}
      },
      categories: [],
      times: []
    }
  },
  // computed: {
  //   ...mapGetters({
  //     categoryLength: 'getCategoriesLength',
  //     searchCategories: 'getCategoryByString'
  //   })
  // },
  /// ??? EVAN: Is *created* the ideal hook to perform some logic a component depends on like this?
  created() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    this.times = times
  },
  mounted() {
    /// ??? EVAN: Thoughts on doing this in *mounted* vs. a computed property?
    this.event.organizer = this.$store.state.user
    this.event.attendees[
      this.$store.state.user.id
    ] = this.$store.state.user.username
    this.categories = this.$store.state.categories
  },
  methods: {
    // ...mapMutations(['ADD_EVENT'])
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
      this.event = { ...EMPTY_EVENT }
      /// ??? EVAN: Thoughts on clearing this.event out like this?
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
