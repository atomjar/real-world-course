<template>
  <div>
    <p>{{ events.title }}</p>
    <p>{{ events.date }}</p>
    <p>{{ events.time }}</p>
    <p>{{ events.attendeeCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    events: Object
  }
}
</script>

<style>
</style>
