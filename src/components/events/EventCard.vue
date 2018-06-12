<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ events.time }} on {{ events.date }}</span>
    <h4 class="title">{{ events.title }}</h4>
    <MetaField iconName="users">{{ events.attendeeCount }} attending</MetaField>
  </div>
</template>

<script>
import MetaField from '@/components/MetaField.vue'

export default {
  name: 'EventCard',
  components: {
    MetaField
  },
  props: {
    events: Object
  }
}
</script>

<style>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
</style>
