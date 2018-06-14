<template>
  <div @click="expandEvent(id)" class="event-card -shadow">
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
  components: {
    MetaField
  },
  props: {
    time: {
      type: String,
      required: true
    },
    date: [Object, String, Date], //fix this format
    title: String,
    id: [String, Number],
    attendees: Array
  },
  methods: {
    expandEvent(id) {
      this.$router.push({ name: 'attend', params: { id } })
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
</style>