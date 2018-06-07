<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span class="meta">
      <Icon name="users" />
      {{ event.attendeeCount }} people going</span>
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

<style scoped>
.event-card {
  padding: 20px;
}
.event-card > .title {
  margin: 0;
}
</style>
