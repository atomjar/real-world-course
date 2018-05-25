<template>
  <div>
    <h1>Events Page</h1>
    <EventCard v-for="event in events" :key="event.id" :events="{title: event.title, date: event.date, time: event.time, attendeeCount: event.attendeeCount}"/>
  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Events',
  components: {
    EventCard
  },
  mounted() {
    this.$store.dispatch('fetchEvents') /// ??? EVAN: Would love your feedback on our fetchEvents Action implemention
  },
  computed: {
    events() {
      return this.$store.state.events /// ??? EVAN: What is best practice for directly accessing the state liek this vs. using a getter for something like this?
    }
  }
}
</script>

<style>
</style>
