<template>
  <div class="event-list">
    <EventCard
      v-for="event in events"
      v-bind="event"
      :key="event.title"
    />
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
