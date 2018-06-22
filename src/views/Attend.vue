<template>
  <div>
    <div v-if="!event">
      <p>Loading...</p>
    </div>
    <div v-else>
      <transition name='fade-close' v-if="this.event.organizer.name !== this.$store.state.user.name">
        <div v-if='showPrompt'
            class="prompt-box -shadow">
          <h3 class="title">Are you going?
            <MetaField iconName="users">{{ event.attendees.length }} attending</MetaField></h3>

          <Button @click="addAttendee" class="-fill-gradient">Yes</Button>
          <Button @click="notAttending" class="-fill-gray">No</Button>

          <transition name="cover" @after-enter="hidePrompt">
            <span v-if='attend' key='attend' class="banner -confirm"></span>
            <span v-if='notattend' key='notattend' class="banner -deny"></span>
          </transition>
        </div>
      </transition>

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
    },
    notAttending() {
      this.notattend = true
    },
    hidePrompt() {
      setTimeout(() => {
        this.showPrompt = false
      }, 400)
    }
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
.prompt-box > button {
  margin-right: 0.5em;
}
.prompt-box > button:last-of-type {
  margin-right: 0;
}
.prompt-box > .banner {
  position: absolute;
  display: flex;
  width: 250%;
  height: 500px;
  overflow: hidden;
  border-radius: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.prompt-box > .banner.-confirm {
  background: #39b982;
}
.prompt-box > .banner.-deny {
  background: tomato;
}
/* Cover Transition CSS */
.cover-enter-active.banner {
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
}
.cover-enter.banner {
  width: 0;
  height: 0;
}
.cover-enter-to.banner {
  width: 250%;
  height: 500px;
}
/* Prompt Box Close Transition CSS */
.fade-close-leave-active {
  transition: all 1s;
}
.fade-close-leave-to {
  transform: scaleY(0);
  opacity: 0;
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
