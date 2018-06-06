<template>
  <div @click="expandEvent(id)" class="event-card -shadow">
    <span class="eyebrow">@{{ time }} on {{ date }}</span>
   <h4 class="title">{{ title }}</h4>
   <meta-field iconName="users">{{ attendeeNumber }} attending</meta-field>
  </div>
</template>

<script>
import MetaField from '@/components/MetaField'
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
    date: [Date, String],
    title: String,
    id: Number,
    attendees: {
      type: Object
    }
  },
  computed: {
    attendeeNumber() {
      return Object.values(this.attendees).length
    }
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
