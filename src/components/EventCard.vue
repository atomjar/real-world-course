<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ time }} on {{ date }}</span>
    <h4 class="title">{{ title }}</h4>
    <span class="meta">
      <Icon name="users" />
      {{ attendeeCount }} people going</span>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      title: 'Park Cleanup',
      date: 'Tue May 15 2018 16:26:21 GMT-0400',
      time: '6:00',
      attendeeCount: 0
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
