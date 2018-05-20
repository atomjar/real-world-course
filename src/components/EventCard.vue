<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ events.time }} on {{ events.date }}</span>
   <h4  class="title">{{ events.title }}</h4>

    <span class="meta">
      <svg class="icon" width="24" height="24">
        <use xlink:href="feather-sprite.svg#users"/></svg>
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
  margin-bottom: 24px;
}
.event-card > .title {
  margin: 0;
}
</style>
