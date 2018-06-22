<template>
  <div class="event-list">
    <transition-group
      appear
      name="staggered-events"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false">
      <EventCard
        v-for="(event, index) in events"
        v-bind="event"
        v-bind:data-index="index"
        :key="index" />
    </transition-group>
  </div>
</template>

<script>
import EventCard from '@/components/events/EventCard.vue'
import Velocity from 'velocity-animate'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  props: {
    events: Array
  },
  methods: {
    beforeEnter(el) {
      // Hide and offset to the left
      el.style.opacity = 0
      el.style.transform = 'translateX(-50px)'
    },
    enter(el, done) {
      // Stagger entrance (especially for onload)
      var delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(el, { opacity: 1, translateX: '0' }, { complete: done })
      }, delay)
    },
    leave(el, done) {
      // Leave to the right (not staggered, looks buggy)
      Velocity(el, { opacity: 0, translateX: '50px' }, { complete: done })
    }
  }
}
</script>

<style scoped>
.event-list {
  margin-top: 24px;
}
</style>
