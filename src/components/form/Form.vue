<template>
  <div>
   <form @submit.prevent>
      <SelectInput
        v-model="event.category"
        label="Select a category"
        :options="categories"/>

      <h3>Name &amp; describe your event</h3>
      <TextInput
        v-model="event.title"
        label="Title"
        type="text"
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
      <Field label="Date">
        <Datepicker
          v-model="event.date"
          placeholder="Select a date"
          required/>
      </Field>

      <SelectInput
        v-model="event.time"
        label="Select a time"
        :options="times"
        required/>

      <Button @click="addEvent" class="-fill-gradient">Submit</Button>
    </form>
   </div>
</template>

<script>
import SelectInput from './SelectInput.vue'
import Datepicker from 'vuejs-datepicker'
import Snackbar from '@/components/Snackbar.vue'
import Field from '@/components/form/Field.vue'
import fb from '@/firebaseConfig.js'

export default {
  components: {
    SelectInput,
    Datepicker,
    Field,
    Snackbar
  },
  data() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createNewEvent(),
      categories: this.$store.state.categories,
      times,
      success: false
    }
  },
  mounted() {
    const error = 'POOP!'
    this.$store.commit('ADD_NOTIFICATION', {
      message: 'Error fetching events: ' + error,
      icon: 'x-circle',
      type: 'error'
    })
  },
  methods: {
    addEvent() {
      fb.eventsCollection
        .doc(this.event.id)
        .set(this.event)
        .then(() => {
          this.$store.commit('ADD_NOTIFICATION', {
            message: 'Your event has been created.',
            icon: 'check-circle',
            type: 'success'
          })
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
      this.event = this.createNewEvent()
    },
    createNewEvent() {
      const user = this.$store.state.user
      return {
        id: `${Math.floor(Math.random() * 10000000)}`,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>
