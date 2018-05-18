<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span class="meta">
      <svg class="icon" width="24" height="24">
        <use xlink:href="feather-sprite.svg#users"/></svg>
      {{ event.attendeeCount }} people going</span>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      event: {
        title: 'Park Cleanup',
        date: 'Tue May 15 2018',
        time: '6:00',
        attendeeCount: 10
      }
    }
  }
}
</script>

<style>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
}
.event-card > .title {
  margin: 0;
}
</style>
