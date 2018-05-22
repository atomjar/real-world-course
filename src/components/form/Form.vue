<template>
  <div>
   <form  @submit.prevent="addEvent">
      <SelectInput 
        v-model="event.category" 
        label="Select a category" 
        :options="categories"/>

      <h3>Name & describe your event</h3>
      <TextInput
        v-model="event.title"
        label="title"
        placeholder="Add an event title"
        required/>

      <TextInput 
        v-model="event.description" 
        label="Description"
        type="text" 
        placeholder="Add a description"
        required/>

      <h3>Where is your event?</h3>
      <TextInput 
        v-model="event.location" 
        label="Location"
        type="text" 
        placeholder="Add a location" 
        required 
        error="This is an imaginary location"/>

      <h3>When is your event?</h3>
      <Datepicker 
        v-model="event.date" 
        placeholder="Select a date"
        required/>

      <SelectInput 
        v-model="event.time" 
        label="Select a time" 
        :options="times"
        required/>

      <Button>Submit</Button>
    </form>

    <snackbar v-if="success">
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">Your event has been created.</p>
    </snackbar>
  </div>
</template>

<script>
import SelectInput from './SelectInput.vue'
import Datepicker from 'vuejs-datepicker'
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
  components: {
    SelectInput,
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
        time: '',
        attendees: {}
      },
      categories: [],
      times: [],
      success: false
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