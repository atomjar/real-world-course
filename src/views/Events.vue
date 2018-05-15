<template>
  <div>
    <h1>Events Page</h1>
    <EventCard />
  </div>

</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Events',
  components: {
    EventCard
  }
}
</script>

<style>
</style>
