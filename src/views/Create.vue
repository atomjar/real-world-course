<template>
  <div>
    <h1>Create Page</h1>

    <form @submit.prevent="addEvent">

      <h2>Tell us about your event</h2>

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
        required />

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

      <Button class="-fill-gradient">Submit</Button>
    </form>

    <Snackbar v-if="success" iconName="check-circle">
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">Your event has been created.</p>
    </Snackbar>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import SelectInput from '@/components/SelectInput.vue'
import Field from '@/components/Field.vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: 'Create',
  components: {
    Datepicker,
    Field,
    SelectInput,
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
    }
  }
}
</script>
