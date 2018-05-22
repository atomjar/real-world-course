<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ events.time }} on {{ events.date }}</span>
    <!-- <h4 class="title">{{ events.title | exclaimation  }}</h4> -->
   <h4  class="title">{{ events.title }}</h4>

    <span class="meta">
      <icon name="users"></icon>
      {{ events.attendeeCount }} people going</span>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    events: Object
  }
  // filters: {
  //   exclaimation(title) {
  //     return title + '!!!'
  //   }
  // }
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
