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
    this.$store.dispatch('fetchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<style>
</style>
