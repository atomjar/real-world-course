<template>
  <div>
    <form>
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
        :options="$options.$times"
        required/>

      <Button
        @click="addEvent"
        class="-fill-gradient">
        Submit
      </Button>
    </form>

    <snackbar v-if="success" iconName="check-circle">
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">Your event has been created.</p>
    </snackbar>
  </div>
</template>

<script>
import SelectInput from '@/components/form/SelectInput.vue'
import Datepicker from 'vuejs-datepicker'
import Snackbar from '@/components/Snackbar.vue'
import Field from '@/components/form/Field.vue'

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
      times
    }
  },
  methods: {
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
      this.event = this.createNewEvent()
    },
    createNewEvent() {
      const user = this.$store.state.user
      return {
        id: 0,
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

<style>
</style>
