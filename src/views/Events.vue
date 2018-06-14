<template>
  <div>
    <h1>Events Page</h1>
    <EventCard 
      v-for="event in events"
      v-bind="event" 
      :key="event.id"/>

    <!-- <p v-if="error">{{ error }}</p> --> 
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Events',
  components: {
    EventCard
  },
  // data() {
  //   return {
  //     error: '' // How to handle error
  //   }
  // },
  mounted() {
    if (!this.$store.state.events.length) {
      this.$store.dispatch('fetchEvents')
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<style>
.active {
  color: green;
}
</style>
