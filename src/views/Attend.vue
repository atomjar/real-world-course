<template>
  <div>

    <div class="prompt-box -shadow">
      <h3 class="title">Are you going?
        <meta-field iconName="users">{{ event.attendeeCount }} people going</meta-field></h3>
      <Button :onClick="addAttendee" class="-fill-gradient">Yes</Button>
      <Button :onClick="notAttending" class="-fill-gray">No</Button>
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

    <h2>Attendees</h2>
    <ul>
      <li v-for="attendee in attendees">{{ attendee }}</li>
    </ul>

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
      event: {},
      attendees: []
    }
  },
  mounted() {
    this.event = this.$store.getters.getEvent(this.$route.params.id)[0]

    this.attendees = Object.values(this.event.attendees)
  },
  methods: {
    addAttendee() {
      console.log('user', this.$store.state.user)
      this.$store.commit('ADD_ATTENDEE', {
        eventId: this.$route.params.id,
        user: this.$store.state.user
      })
      this.attendees.push(this.$store.state.user.username)
      // EVAN: What is best practice for updating the list of attendees when a user clicks "yes" and adds themself as an attendee? Should we *get* new attendee list from the store, or is this way fine?
    },
    notAttending() {
      console.log('Not attending')
    }
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
