<template>
  <div>
   <form @submit.prevent>
      <SelectInput
        v-model="event.category"
        label="Select a category"
        :options="categories"/>

       <h3>Name & describe your event</h3>
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
        :options="categories"
        required/>

      <Button :onClick.prevent="addEvent" class="-fill-gradient">Submit</Button>
    </form>

     <snackbar v-if="success" iconName="check-circle">
       <h4 slot="header">Success!</h4>
       <p slot="paragraph">Your event has been created.</p>
     </snackbar>
   </div>
</template>

<script>
import SelectInput from './SelectInput.vue'
import Datepicker from 'vuejs-datepicker'
import Snackbar from '@/components/Snackbar.vue'
import Field from '@/components/form/Field.vue'
import times from '../../timesUtil'
const fb = require('@/firebaseConfig.js')

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
  methods: {
    addEvent() {
      fb.eventsCollection
        .doc(this.event.title)
        .set(this.event)
        .then(() => {
          this.success = true
        })
        .catch(error => {
          console.error('Error writing document: ', error)
        })
      this.event = this.createNewEvent()
    }
  },
  createNewEvent() {
    const user = this.$store.state.user
    return {
      id: Math.floor(Math.random() * 10000000),
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
</script>

<style>
</style>



