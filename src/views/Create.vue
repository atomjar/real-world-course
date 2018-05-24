<template>
  <div>
    <h1>Create Page</h1>

    <form  @submit.prevent="addEvent">

      <h2>Tell us about your event</h2>

      <option-select v-model="event.category" label="Select a category" :options="categories"></option-select>


      <h3>Name & describe your event</h3>

      <input-field v-model="event.title" type="text" placeholder="Add an event title" required></input-field>

      <input-field v-model="event.description" type="text" placeholder="Add a description"></input-field>

      <h3>Where is your event?</h3>
      <input-field v-model="event.location" type="text" placeholder="Add a location" required></input-field>

      <h3>When is your event?</h3>

      <datepicker v-model="event.date" placeholder="Select a date"/>

      <option-select v-model="event.time" label="Select a time" :options="times"></option-select>

      <!-- <input type="submit" value="Submit"/> -->
      <base-button>Submit</base-button>
    </form>

    <snackbar v-if="success">
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">Your event has been created.</p>
    </snackbar>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import InputField from '@/components/InputField.vue'
import OptionSelect from '@/components/OptionSelect.vue'
import Snackbar from '@/components/Snackbar.vue'

const EMPTY_EVENT = {
  category: '',
  organizer: {},
  title: '',
  description: '',
  location: '',
  date: '',
  time: ''
}

export default {
  name: 'Create',
  components: {
    Datepicker,
    InputField,
    OptionSelect,
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
      times: [],
      success: false
    }
  },
  // computed: {
  //   ...mapGetters({
  //     categoryLength: 'getCategoriesLength',
  //     searchCategories: 'getCategoryByString'
  //   })
  // },
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
      this.$store.dispatch('addEvent', this.event)
      this.success = true
      this.event = { ...EMPTY_EVENT }
    }
  }
}
</script>

<style>
</style>
