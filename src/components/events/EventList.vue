<template>
  <div class='event-list'>
    <EventCard v-for="event in events"
               :events="{ time: event.time,
                         date: event.date,
                         title: event.title,
                         attendeeCount: event.attendeeCount }"
               :key="event.title"/>
  </div>
</template>

<script>
import EventCard from '@/components/events/EventCard.vue'

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

<style scoped>
.event-list {
  margin-top: 24px;
}
</style>
