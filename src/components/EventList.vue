<template>
  <div>
    <EventCard v-for="event in events" :key="event.id"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    events: Array
  }
}
</script>

<style>
</style>
