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
          <meta-field iconName="users">
          {{ event.attendees.length }} attending
          </meta-field>
        </h3>
        <Button @click="addAttendee" class="-fill-gradient">Yes</Button>
        <Button @click="notAttending" class="-fill-gray">No</Button>
      </div>

      <div>
        <div class="event-header">
          <span class="eyebrow">@{{ event.time }} on {{ parsedDate }}</span>
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
import fb from '@/firebaseConfig.js'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export default {
  name: 'Attend',
  components: {
    MetaField,
    MediaBlock,
    Icon
  },
  data() {
    return {
      event: null,
      docRef: null
    }
  },
  created() {
    var docRef = fb.eventsCollection.doc(this.$route.params.id)
    this.docRef = docRef

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          this.event = doc.data()
        } else {
          console.log('No such document!')
        }
      })
      .catch(error => {
        console.log('Error getting document:', error)
      })
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.event.date.seconds * 1000)
      return `${
        MONTHS[eventDate.getMonth() - 1]
      } ${eventDate.getDay()}, ${eventDate.getFullYear()}`
    }
  },
  methods: {
    addAttendee() {
      const user = this.$store.state.user
      const newAttendees = this.event.attendees
      newAttendees.push(user)

      this.docRef.set({ attendees: newAttendees }, { merge: true })

      this.event.attendees = newAttendees
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
