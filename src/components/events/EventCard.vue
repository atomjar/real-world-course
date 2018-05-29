<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ time }} on {{ date }}</span>
    <!-- <h4 class="title">{{ title | exclaimation  }}</h4> -->
   <h4 class="title">{{ title }}</h4>

    <span class="meta">
      <Icon name="users" />
      {{ attendeeCount }} people going</span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'EventCard',
  components: {
    Icon
  },
  props: {
    time: {
      type: String,
      required: true
    },
    date: [Date, String],
    title: String,
    attendeeCount: {
      type: Number,
      default: 0
    }
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
