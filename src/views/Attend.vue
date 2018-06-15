<template>
  <div>
    <div v-if="!event">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div
        v-if="event.organizer.name !== this.$store.state.user.name"
        class="prompt-box -shadow">
        <h3 class="title">Are you going?
          <meta-field iconName="users">{{ event.attendees.length }} attending</meta-field>
        </h3>
        <Button @click="addAttendee" class="-fill-gradient">Yes</Button>
        <Button @click="notAttending" class="-fill-gray">No</Button>
      </div>

      <div>
        <div class="event-header">
          <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
          <h1 class="title">{{ event.title }}</h1>
          <media-block>
            <h5 slot="header">Organized by {{ event.organizer.name }}</h5>
            <meta-field slot="paragraph" iconName="tag">Category: {{ event.category }}</meta-field>
          </media-block>
        </div>

        <h3 class="location">Location <icon name="map"></icon></h3>
        <address>{{ event.location }}</address>

        <h2>Event details</h2>
        <p>{{ event.description }}</p>

        <h2>Attendees
          <span class="badge -fill-gradient">{{ event.attendees.length }}</span>
        </h2>
        <ul class="list-group">
          <li v-for="attendee in event.attendees" class="list-item">
              <h5 slot="header">{{ attendee.name }}</h5>
          </li>
        </ul>
      </div>
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
    MediaBlock,
    Icon
  },
  data() {
    return {
      event: null
    }
  },
  created() {
    fb.eventsCollection
      .where('id', '==', this.$route.params.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => (this.event = doc.data()))
      })
  },
  methods: {
    updateAttendees(newAttendees) {
      const eventDoc = fb.eventsCollection.doc(this.event.title)

      eventDoc
        .get()
        .then(doc => {
          if (doc.exists) {
            // Would love to use the event doc that we get inside the
            // created hook, sadly the one we get by using `.where`
            // located in the querySnapshot doesn’t have a `.set` method
            // when accessed after saving it to state
            eventDoc.set({ attendees: newAttendees }, { merge: true })
          } else {
            console.log('Error fetching Event Doc!')
          }
        })
        .catch(error => {
          console.log('Error fetching Document:', error)
        })
    },
    addAttendee() {
      const user = this.$store.state.user
      const userAlreadyAttendsTheEvent = this.event.attendees.find(
        attendee => attendee.id === user.id
      )
      if (userAlreadyAttendsTheEvent) return

      this.event.attendees.push(user)

      this.updateAttendees(this.event.attendees)
    },
    notAttending() {
      const user = this.$store.state.user
      this.event.attendees = this.event.attendees.filter(
        attendee => attendee.id !== user.id
      )

      this.updateAttendees(this.event.attendees)
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
