<template>
  <div>

    <div
      v-if="event.organizer.name !== this.$store.state.user.name"
      class="prompt-box -shadow">
      <h3 class="title">Are you going?
        <MetaField iconName="users">{{ event.attendees.length }} attending</MetaField></h3>
      <Button :onClick="addAttendee" class="-fill-gradient">Yes</Button>
      <Button :onClick="notAttending" class="-fill-gray">No</Button>
    </div>

  <div>
    <div class="event-header">
      <span class="eyebrow">@{{event.time}} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <MediaBlock>
        <h5 slot="header">Organized by {{ event.organizer.name }}</h5>
        <meta-field slot="paragraph" iconName="tag">Category: {{ event.category }}</meta-field>
      </MediaBlock>
    </div>

    <h3 class="location">Location <icon name="map"></icon></h3>
    <address>{{ event.location }}</address>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>

    <h2>Attendees
      <span class="badge -fill-gradient">{{ event.attendees.length }}</span></h2>
    <ul class="list-group">
      <li v-for="attendee in event.attendees" class="list-item">
        <MediaBlock>
          <h5 slot="header">{{ attendee.name }}</h5>
        </MediaBlock>
      </li>
    </ul>

  </div>

  </div>
</template>

<script>
import MetaField from '@/components/MetaField'
import MediaBlock from '@/components/MediaBlock'
import Icon from '@/components/Icon'
const fb = require('@/firebaseConfig.js')

export default {
  name: 'Attend',
  components: {
    MetaField,
    MediaBlock
  },
  mounted() {
    console.log('organizer', this.event.organizer)
  },
  computed: {
    event() {
      return this.$store.getters.getEvent(this.$route.params.id)
    }
  },
  methods: {
    addAttendee() {
      const user = this.$store.state.user

      const thisEvent = fb.eventsCollection.doc(this.event.title)

      thisEvent
        .get()
        .then(doc => {
          if (doc.exists) {
            let attendees = doc.data().attendees
            attendees.push(user)

            thisEvent.set({ attendees: attendees }, { merge: true })
          } else {
            console.log('Error fetching Event Doc!')
          }
        })
        .catch(error => {
          console.log('Error fetching Document:', error)
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
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
