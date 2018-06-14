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
import EventList from '@/components/EventList.vue'
import FilterInput from '@/components/FilterInput.vue'

export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    FilterInput
  },
  data() {
    return {
      events: [],
      error: ''
    }
  },
  mounted() {
    this.$store.dispatch('fetchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    filteredEvents() {
      if (!this.filter) {
        return this.events
      } else {
        return this.events.filter(event => {
          var titleMatches = event.title
            .toLowerCase()
            .includes(this.filter.toLowerCase())

          var categoryMatches = event.category
            .toLowerCase()
            .includes(this.filter.toLowerCase())

          if (titleMatches === 0) {
            this.errorMessage = 'Nope'
          } else {
            return titleMatches + categoryMatches
          }
        })
      }
    }
  },
  methods: {
    updateFilter(filter) {
      this.filter = filter
    }
  }
}
</script>

<style>
</style>
