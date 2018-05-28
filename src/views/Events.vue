<template>
  <div>
    <h1>Events</h1>
    <TextInput
      v-model="filter"
      type="text"
      class="-shadow"
      placeholder="Type to filter events"/>

    <span v-show="errorMessage">{{ errorMessage }}</span>

    <TabItem
      @click.native="selectedType = 'all'"
      :class="{ 'active': selectedType === 'all' }"
      iconName="clock">
        All Events
    </TabItem>

    <TabItem
      @click.native="selectedType = 'my'"
      :class="{ 'active': selectedType === 'my' }"
      iconName="calendar">
        My Events
    </TabItem>

    <TabItem
      @click.native="selectedType = 'attending'"
      :class="{ 'active': selectedType === 'attending' }"
      iconName="users">
      Attending
    </TabItem>

    <EventList :events="filteredEvents"/>

  </div>
</template>

<script>
import EventCard from '@/components/events/EventCard.vue'
import EventList from '@/components/events/EventList.vue'
import TabItem from '@/components/TabItem.vue'
export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    TabItem
  },
  data() {
    return {
      filter: '',
      selectedType: 'all'
    }
  },
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
        event => event.organizer === this.$store.state.user.username
      )
    },
    attendingEvents() {
      return this.events.filter(event => {
        const attendeesIds = Object.keys(event.attendees)

        return attendeesIds.indexOf(this.$store.state.user.id) !== -1
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
</style>
