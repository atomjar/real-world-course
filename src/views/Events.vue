<template>
  <div>
    <h1>Events Page</h1>
    <EventCard 
      v-for="event in events"
      v-bind="event" 
      :key="event.id"/>

    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    TabItem
  },
  data() {
    return {
      events: [],
      error: ''
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        this.events = response.data
      })
      .catch(err => {
        this.error = 'There was an error:' + err.response
      })
  }
}
</script>

<style>
.active {
  color: green;
}
</style>
