<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ date }}</p>
    <p>{{ time }}</p>
    <p>{{ attendeeCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      title: 'Park Cleanup',
      date: 'Tue May 15 2018 16:26:21 GMT-0400',
      time: '6:00',
      attendeeCount: 0
    }
  }
}
</script>

<style>
</style>
