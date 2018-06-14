<template>
  <div class="event-card -shadow">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <span class="meta">
      <Icon name="users" />
      {{ event.attendees.length }} attending
    </span>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'EventCard',
  data() {
    return {
      event: {
        title: 'Park Cleanup',
        date: 'Tue May 15 2018',
        time: '6:00',
        attendees: [{ id: 'abc123', name: 'Adam Jahr' }]
      }
    }
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
.meta {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.meta .icon {
  margin-right: 6px;
}
</style>
