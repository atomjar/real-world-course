<template>
  <div>
    <div>
      <h2>Are you going?</h2>
    </div>

    <div class="event-card -shadow">
    <p>@{{ event.time }} on {{ event.date }}</p
    <h1>{{ event.title }}</h1>
    <p>Organized by {{ event.organizer }}</p>
    <h4>Location</h4>
    <p>{{ event.location }}</p>
    <h4>Event details</h4>
    <p>{{ event.description }}</p>

    <span>{{ event.attendeeCount }} people going</span>
  </div>

  </div>
</template>


<script>
export default {
  name: 'Attend',
  data() {
    return {
      event: {}
    }
  },
  mounted() {
    this.event = this.$store.getters.getEvent(this.$route.params.id)[0]
    console.log('event is', this.event)
  }
}
</script>

<style>
</style>
