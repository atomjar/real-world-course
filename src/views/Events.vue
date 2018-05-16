<template>
  <div>
    <h1>Events Page</h1>
    <h2>Total Events: {{ totalEvents }}</h2>
    <EventCard v-for="event in largeEvents" :key="event.id" :events="{title: event.title, date: event.date, time: event.time, attendeeCount: event.attendeeCount}"/>
  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Events',
  components: {
    EventCard
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    ...mapGetters(['totalEvents', 'largeEvents'])
  }
}
</script>

<style>
</style>
