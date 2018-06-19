import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyAEb7K5Rh7VO-9O6ySVyQhWCz4g9Kw4Stc',
  authDomain: 'real-world-vue.firebaseapp.com',
  databaseURL: 'https://real-world-vue.firebaseio.com',
  projectId: 'real-world-vue',
  storageBucket: 'real-world-vue.appspot.com',
  messagingSenderId: '546798950265'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const eventsCollection = db.collection('events')

export default {
  db,
  auth,
  currentUser,
  usersCollection,
  eventsCollection
}
