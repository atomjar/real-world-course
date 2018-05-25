<template>
  <div>
    <h1>Events Page</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
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
    // Added this guard for now since we can't add to db.json via json-server. Without the guard, an event added to store.state from Create.vue is erased when this component mounts.
    if (!this.$store.state.events.length) {
      this.$store.dispatch('fetchEvents')
    }
    /// ??? EVAN: Would love your feedback on our fetchEvents Action implemention.
  },
  computed: {
    events() {
      return this.$store.state.events
      /// ??? EVAN: What is best practice for when to directly access the state like this vs. using a getter?
    }
  }
}
</script>

<style>
</style>
