<template>
  <div>
    <h1>Create an Event</h1>

    <form  @submit.prevent="addEvent(event)">
      <h2>Tell us about your event</h2>

      <div class="field">
        <label>Select a category</label>
        <select v-model="event.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>

      <h3>Name &amp; describe your event</h3>

      <div class="field">
        <label>Title</label>
        <input type="text" v-model="event.title" placeholder="Add an event title" />
      </div>

      <div class="field">
        <label>Description</label>
        <input type="text" v-model="event.description" placeholder="Add a description" />
      </div>

      <h3>Where is your event?</h3>

      <div class="field">
        <label>Location</label>
        <input type="text" v-model="event.location" placeholder="Add a location" />
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapMutations } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Create',
  components: {
    Datepicker
  },
  data() {
    return {
      event: {
        category: '',
        organizer: {},
        title: '',
        description: '',
        location: '',
        date: '',
        time: ''
      },
      categories: [],
      times: []
    }
  },
  computed: {
    // username() {
    //   return this.$store.state.user
    // },
    ...mapGetters({
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
  },
  created() {
    var times = []
    for (var i = 1; i <= 24; i++) {
      times.push(i)
    }
    times.map(time => {
      time += ':00'
      this.times.push(time)
    })
  },
  mounted() {
    this.event.organizer = this.$store.state.user
    this.categories = this.$store.state.categories
  },
  methods: {
    addEvent() {
      this.$store.commit('ADD_EVENT', this.event)
    }
  }
}
</script>

<style>
.field {
  margin-bottom: 24px;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 40px;
  background: transparent;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button.-fill-gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
}
.button.-fill-gray {
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  text-align: left;
  padding: 0 20px;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  text-align: right;
  padding: 0 20px;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
</style>
