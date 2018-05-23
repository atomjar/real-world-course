<template>
  <div>

    <div class="prompt-box -shadow">
      <h3 class="title">Are you going?
        <meta-field iconName="users">{{ event.attendeeCount }} people going</meta-field></h3>
      <Button class="-fill-gradient">Yes</Button>
      <Button class="-fill-gray">No</Button>
    </div>

  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <media-block>
        <h5 slot="header">Organized by {{ event.organizer }}</h5>
        <meta-field slot="paragraph" iconName="tag">Category: {{ event.category }}</meta-field>
      </media-block>
    </div>

    <h3 class="location">Location <icon name="map"></icon></h3>
    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>
  </div>

  </div>
</template>


<script>
import MetaField from '@/components/MetaField'
import MediaBlock from '@/components/MediaBlock'
import Icon from '@/components/Icon'
export default {
  name: 'Attend',
  components: {
    MetaField,
    MediaBlock,
    Icon
  },
  data() {
    return {
      event: {
        id: 1,
        title: "Beach Cleanup",
        date: "Aug 28 2018",
        time: "10:00",
        location: "Daytona Beach",
        description: "Let's clean up this beach.",
        organizer: "Adam Jahr",
        category: "sustainability",
        attendeeCount: 10,
        attendees: {
          a: "Adam Jahr",
          b: "Gregg Pollack"
        }
      }
    }
  },
  mounted() {
    // this.event = this.$store.getters.getEvent(this.$route.params.id)[0]
    console.log('event is', this.event)
  }
}
</script>

<style scoped>
.prompt-box {
  padding: 1em;
  margin-bottom: 24px;
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
</style>
