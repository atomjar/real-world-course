<template>
  <div>
    <h1>Create Page</h1>

    <form  @submit.prevent="addEvent(event)">
      <h2>Tell us about your event</h2>
      <input v-model="event.organizer" type="text" placeholder="What's your name?"/>
      <input v-model="event.category" type="text" placeholder="Add a category"/>
 

      <h3>Name & desribe your event</h3>
      <input v-model="event.title" type="text" placeholder="Add an event title"/>
      <input v-model="event.description" type="text" placeholder="Add a description"/>

      <h3>Where is your event?</h3>
      <input v-model="event.location" type="text" placeholder="Add a location"/>

      <h3>When is your event?</h3>

      <datepicker v-model="event.date" placeholder="Select a date"/>

      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in timeOptions" :key="time">{{ time }}</option>
      </select>

      <hr>

      <input type="submit" value="Submit"/>
    </form>

  </div>

  <div>
    <h1>Create Page</h1>
    <p>User: {{ firstName }}</p>
    <p>Amount of categories: {{ categoryLength }}</p>
    <p>{{ searchCategories('nature')}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Create',
  computed: {
    username() {
      return this.$store.state.user
    },
    ...mapGetters({
      firstName: 'getFirstName',
      categoryLength: 'getCategoriesLength',
      searchCategories: 'getCategoryByString'
    })
    // firstName() {
    //   return this.$store.getters.getFirstName
    // },
    // categoriesLength() {
    //   return this.$store.getters.getCategoriesLength
    // }
  }
}
import Datepicker from 'vuejs-datepicker'
import { mapMutations } from 'vuex'

export default {
  name: 'Create',
  components: {
    Datepicker
  },
  data() {
    return {
      event: {
        category: '',
        organizer: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: ''
      },
      timeOptions: [
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00'
      ]
    }
  },
  methods: {
    ...mapMutations(['addEvent'])
    // addEvent() {
    //   this.$store.commit('addEvent', this.event)
    // }
  }
}
</script>

<style>
</style>
