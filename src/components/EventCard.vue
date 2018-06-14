<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ time }} on {{ date }}</span>
    <h4 class="title">{{ title }}</h4>
    <span class="meta">
      <svg class="icon" width="24" height="24">
        <use xlink:href="feather-sprite.svg#users"/>
      </svg>
      {{ attendees.length }} attending
    </span>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    time: String,
    date: [Date, String],
    title: String,
    id: Number,
    attendees: Array
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
