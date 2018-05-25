<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span class="meta">
      <svg class="icon" width="24" height="24">
        <use xlink:href="feather-sprite.svg#users"/></svg>
      {{ event.attendeeCount }} attending</span>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object
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
