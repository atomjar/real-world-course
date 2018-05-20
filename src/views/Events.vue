<template>
  <div>
    <h1>Events</h1>
    <FilterInput @filter-emitted="updateFilter" placeholder="Type to filter events"/>

    <p v-show="errorMessage">{{ errorMessage }}</p>

    <EventList :events="filteredEvents"/>

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
      filter: ''
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
          } else {
            return titleMatches + categoryMatches
          }
        })
      }
    },
    errorMessage() {
      return this.filteredEvents.length || !this.filter ? '' : 'Nope'
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
