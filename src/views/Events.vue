<template>
  <div>
    <h1>Events</h1>
    <SearchInput @category-emitted="updateSearch" placeholder="Search by category"/>

    <!-- <EventList :events="events"/> -->

    <div v-for="event in filteredEvents">{{ event }}</div>

  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'
import EventList from '@/components/EventList.vue'
import SearchInput from '@/components/SearchInput.vue'

export default {
  name: 'Events',
  components: {
    EventCard,
    EventList,
    SearchInput
  },
  data() {
    return {
      events: [],
      eventss: ['a', 'b', 'nature', 'nature2'],
      search: ''
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/events')
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  computed: {
    filteredEvents() {
      return this.eventss.filter(event => {
        event === this.search
      })
    }
  },
  methods: {
    updateSearch(cat) {
      this.search = cat
      console.log('this.search is', this.search)
    }
  }
}
</script>

<style>
</style>
