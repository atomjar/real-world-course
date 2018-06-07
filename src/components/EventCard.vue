<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ events.time }} on {{ events.date }}</span>
    <h4 class="title">{{ events.title }}</h4>
    <span class="meta">
      <Icon name="users" />
      {{ events.attendeeCount }} people going</span>
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
.event-card {
  padding: 20px;
}
.event-card > .title {
  margin: 0;
}
</style>
