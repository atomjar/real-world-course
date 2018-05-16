import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {
        id: 1,
        title: 'Beach Cleanup',
        date: '28 October 2018',
        time: '10:00',
        timestamp: 1540749900,
        location: '132 N Magnolia Street, Orlando, Florida',
        description: "Let's cleanup this beach.",
        organizer: 'Ádam Jahr',
        category: {
          sustainability: true,
          nature: true
        },
        attendeeCount: 10
      },
      {
        id: 2,
        title: 'Park Cleanup',
        date: '12 Novemer 2018',
        time: '12:00',
        timestamp: 1540748600,
        location: '132 N Magnolia Street, Orlando, Florida',
        description: "We're going to clean up this park.",
        organizer: 'Ádam Jahr',
        category: {
          sustainability: true,
          nature: true
        },
        attendeeCount: 20
      },
      {
        id: 3,
        title: 'Homeless Buffet',
        date: '2 December 2018',
        time: '2:00',
        timestamp: 1540729600,
        location: '132 N Magnolia Street, Orlando, Florida',
        description: "We're going to cook great food.",
        organizer: 'Ádam Jahr',
        category: {
          homelessness: true
        },
        attendeeCount: 30
      }
    ]
  },
  mutations: {},
  actions: {}
});
