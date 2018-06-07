<template>
  <div>
    <h1>Events Page</h1>
    <EventCard v-for="event in events" :key="event.id" :events="{title: event.title, date: event.date, time: event.time, attendeeCount: event.attendeeCount}"/>
  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'
// import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Events',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  computed: {
    // events() {
    //   return this.$store.state.events
    // },
    // ...mapGetters(['totalEvents', 'largeEvents'])
    // totalEvents() {
    //   return this.$store.getters.totalEvents
    // }
  }
}
</script>

<style>
</style>
