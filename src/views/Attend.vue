<template>
  <div>

    <div class="prompt-box -shadow">

      <h3 class="title">Are you going?
        <meta-field iconName="users">
        {{ event.attendees.length }} attending
        </meta-field>
      </h3>

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

    <h2>Attendees
      <span class="badge -fill-gradient">{{ event.attendees.length }}</span></h2>
    <ul class="list-group">
      <li v-for="attendee in event.attendees" class="list-item">
        <media-block :imagePath="attendee.avatar" class="-img-circle">
          <h5 slot="header">{{ attendee.name }}</h5>
        </media-block>
      </li>
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
  computed: {
    event() {
      return this.$store.getters.getEvent(this.$route.params.id)
    }
  },
  methods: {
    addAttendee() {
      this.$store.commit('ADD_ATTENDEE', {
        eventId: this.$route.params.id,
        user: this.$store.state.currentUser.user
      })
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
