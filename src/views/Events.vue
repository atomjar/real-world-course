<template>
  <div>
    <h1>Events</h1>
    <SearchInput placeholder="Search by category"/>
    <EventList :events="events"/>
  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
import EventList from '@/components/EventList.vue'
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    SearchInput
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
  }
}
</script>

<style>
</style>
