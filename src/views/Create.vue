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
      <!-- used $options.$times in options prop -->
      <option-select v-model="event.time" label="Select a time" :options="$options.$times"></option-select>
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
import times from '@/timesUtil'
import InputField from '@/components/InputField.vue'
import OptionSelect from '@/components/OptionSelect.vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: 'Create',
  components: {
    Datepicker,
    InputField,
    OptionSelect,
    Snackbar
  },
  /*this is custom option which can be accessed using vm.$options.$times
    since the times array stays static there is no need for it to be data option
  */
  $times: times,
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
      // times: [],
      success: false
    }
  },
  // computed: {
  //   ...mapGetters({
  //     categoryLength: 'getCategoriesLength',
  //     searchCategories: 'getCategoryByString'
  //   })
  // },
  mounted() {
    this.event.organizer = this.$store.state.user
    this.categories = this.$store.state.categories
  },
  methods: {
    addEvent() {
      this.$store.dispatch('addEvent', this.event)
      this.success = true
    }
  }
}
</script>

<style>
</style>
