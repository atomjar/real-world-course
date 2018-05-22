<template>
  <div>
    <h1>Create an event</h1>

    <Form/>

  </div>
</template>

<script>
import Form from '@/components/form/Form.vue'

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
    Form
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
