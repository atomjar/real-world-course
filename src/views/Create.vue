<template>
  <div>
    <h1>Create an Event</h1>

    <form  @submit.prevent="addEvent(event)">
      <h2>Tell us about your event</h2>

      <BaseField>
        <label>Select a category</label>
        <select v-model="event.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </BaseField>

      <h3>Name & describe your event</h3>
      <BaseField>
        <label>Title</label>
        <BaseInput v-model="event.title" placeholder="Add an event title" />
      </BaseField>

      <BaseField>
        <label>Description</label>
        <BaseInput v-model="event.description" placeholder="Add a description" />
      </BaseField>

      <h3>Where is your event?</h3>

      <BaseField>
        <label>Location</label>
        <BaseInput v-model="event.location" placeholder="Add a location" />
      </BaseField>

      <h3>When is your event?</h3>

      <BaseField>
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </BaseField>

      <BaseField>
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </BaseField>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import BaseField from '../components/FormFields/BaseField'
import BaseInput from '../components/FormFields/BaseInput'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Create',
  components: {
    BaseField,
    BaseInput,
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
    // username() {
    //   return this.$store.state.user
    // },
    ...mapGetters({
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
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
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
    }
  }
}
</script>

<style>
</style>
