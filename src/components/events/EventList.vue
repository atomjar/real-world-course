<template>
  <div class="event-list">
    <transition-group
      appear
      name="staggered-events"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      :css="false">
      <EventCard
        v-for="(event, index) in events"
        v-bind="event"
        v-bind:data-index="index"
        :key="event.title" />
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
    beforeEnter: function (el) {
      // Hide and offset to the left
      el.style.opacity = 0
      el.style.transform = 'translateX(-50px)'
    },
    enter: function (el, done) {
      // Stagger entrance (especially for onload)
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, translateX: '0' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      // Leave to the right (not staggered, looks buggy)
      Velocity(
        el,
        { opacity: 0, translateX: '50px' },
        { complete: done }
      )
    }
  }
}
</script>

<style scoped>
.event-list {
  margin-top: 24px;
}
</style>
