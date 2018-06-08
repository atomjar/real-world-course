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
}
.event-card > .title {
  margin: 0;
}
</style>
