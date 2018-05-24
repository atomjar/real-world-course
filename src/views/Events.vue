<template>
  <div>
    <h1>Events</h1>
    <InputField v-model="filter" placeholder="Type to filter events"/>

    <p v-show="errorMessage">{{ errorMessage }}</p>
    <button
      @click="selectedType = 'all'"
      type="button"
      :class="{ 'active': selectedType === 'all' }"
      name="button">
        All Events
      </button>
    <button
      @click="selectedType = 'my'"
      type="button"
      :class="{ 'active': selectedType === 'my' }"
      name="button">
        My Events
      </button>
    <button
      @click="selectedType = 'attending'"
      type="button"
      :class="{ 'active': selectedType === 'attending' }"
      name="button">
        Attending
      </button>

    <EventList :events="filteredEvents"/>

  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventList from '@/components/EventList.vue'
import InputField from '@/components/InputField.vue'

export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    InputField
  },
  data() {
    return {
      filter: '',
      selectedType: 'all',
      user: {
        id: 1,
        attendingEvents: [{ id: 1 }]
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchEvents')
  },
  computed: {
    events() {
      return this.$store.state.events
    },
    myEvents() {
      return this.events.filter(event => event.owner.id === this.user.id)
    },
    attendingEvents() {
      return this.events.filter(event =>
        this.user.attendingEvents.find(
          attendingEvent => event.id === attendingEvent.id
        )
      )
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
  },
  methods: {
    updateFilter(filter) {
      this.filter = filter
    },
    applySearch(events) {
      if (!this.filter) {
        return events
      } else {
        const searchQuery = this.filter.toLowerCase()

        return events.filter(event => {
          const titleMatches = event.title.toLowerCase().includes(searchQuery)
          const categoryMatches = event.category
            .toLowerCase()
            .includes(searchQuery)

          return titleMatches || categoryMatches
        })
      }
    }
  }
}
</script>

<style>
.active {
  color: green;
}
</style>
