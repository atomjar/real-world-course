<template>
  <div>
    <div v-if="!event">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-if="this.event.organizer.name !== this.$store.state.user.name" class="prompt-box -shadow">
        <h3 class="title">Are you going?
          <MetaField iconName="users">{{ event.attendees.length }} attending</MetaField></h3>

        <div class="actions">
          <transition mode="in-out">
            <Button v-if="attend" class="-text-primary -icon-left" disabled>
              <icon name="check-circle"/> Attending</Button>
            <Button v-else @click="addAttendee" class="-fill-gradient">Yes</Button>
          </transition>

          <transition mode="in-out">
            <Button v-if="notattend" class="-text-error -icon-left" disabled>
              <icon name="x-circle"/> Not Attending</Button>
            <Button v-else @click="notAttending" class="-fill-gray">No</Button>
          </transition>
        </div>
      </div>

      <div class="event-header">
        <span class="eyebrow">@{{ event.time }} on {{ parsedDate }}</span>
        <h1 class="title">{{ event.title }}</h1>
        <media-block>
          <h5 slot="header">Organized by {{ event.organizer.name }}</h5>
          <MetaField slot="paragraph" iconName="tag">Category: {{ event.category }}</MetaField>
        </media-block>
      </div>

      <h3 class="location">Location <Icon name="map" /></h3>
      <address>{{ event.location }}</address>

      <h2>Event details</h2>
      <p>{{ event.description }}</p>

      <h2>Attendees
        <span class="badge -fill-gradient">{{ event.attendees.length }}</span>
      </h2>
      <ul class="list-group">
        <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
          <b>{{ attendee.name }}</b>
        </li>
      </ul>
      </div>
    </div>
</template>

<script>
import MetaField from '@/components/MetaField'
import MediaBlock from '@/components/MediaBlock'
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
    MediaBlock
  },
  data() {
    return {
      event: null,
      docRef: null,
      attend: false,
      notattend: false,
      showPrompt: true
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

      this.attend = true
      this.notattend = false
    },
    notAttending() {
      this.notattend = true
      this.attend = false
    }
    // If you choose to hide prompt after selecting an answer
    // hidePrompt() {
    //   setTimeout(() => {
    //     this.showPrompt = false
    //   }, 400)
    // }
  }
}
</script>

<style scoped>
.prompt-box {
  position: relative;
  overflow: hidden;
  padding: 1em;
  margin-bottom: 24px;
  transform: scaleY(1);
}
.prompt-box > .title {
  margin: 0 0 0.5em;
}
.prompt-box > .title > .meta {
  margin-left: 10px;
}
.prompt-box > .actions {
  display: flex;
  align-items: center;
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
