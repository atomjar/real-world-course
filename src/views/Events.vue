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
    },
    myEvents() {
      return this.events.filter(
        event => event.organizer === this.$store.state.user.name
      )
    },
    attendingEvents() {
      return this.events.filter(event => {
        const attendees = event.attendees

        var i
        for (i = 0; i < attendees.length; i++) {
          if (attendees[i].id === this.$store.state.user.id) return true
        }
      })
    },
    filteredEvents() {
      switch (this.selectedType) {
        case 'all':
          return this.applySearch(this.events)
        case 'my':
          return this.applySearch(this.myEvents)
        case 'attending':
          return this.applySearch(this.attendingEvents)
        default:
          return this.applySearch(this.events)
      }
    },
    errorMessage() {
      return this.filteredEvents.length || !this.filter
        ? ''
        : 'No events matching the search query.'
    }
  }
}
</script>

<style>
.active {
  color: green;
}
</style>
