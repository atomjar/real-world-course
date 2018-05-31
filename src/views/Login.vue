<template>
  <div>
      <form v-if="showLoginForm" @submit.prevent>
          <h1>Login</h1>  

          <TextInput 
            v-model="loginForm.email"
            type="text" placeholder="you@email.com" 
            label="Email"/>

          <TextInput 
            v-model="loginForm.password" 
            type="password" 
            placeholder="******" 
            label="Password"/>

          <Button 
            :onClick="login" 
            class="">
            Log In
          </Button>

          <div class="extras">
              <a @click="toggleForm">Create an Account</a>
          </div>
      </form>

      <form v-else @submit.prevent>
        <h1>Sign up</h1>

        <TextInput 
          v-model.trim="signupForm.name" 
          type="text" 
          placeholder="Your Name"
          label="name"/>

        <TextInput 
          v-model.trim="signupForm.email" 
          type="text" placeholder="you@email.com"
          label="email"/>

        <TextInput 
          v-model.trim="signupForm.password" 
          type="password" 
          placeholder="*****"
          label="password"/>

        <Button 
          :onClick="signup" 
          class="button">
          Sign Up
        </Button>

        <div class="extras">
            <a @click="toggleForm">Back to Log In</a>
        </div>
      </form>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js')

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        email: '',
        password: ''
      },
      showLoginForm: true
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    login() {
      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit('setCurrentUser', user)
          this.$store.dispatch('fetchUserProfile')
          this.$router.push('/events')
        })
        .catch(err => {
          console.log(err)
        })
    },
    signup() {
      fb.auth
        .createUserWithEmailAndPassword(
          this.signupForm.email,
          this.signupForm.password
        )
        .then(user => {
          this.$store.commit('setCurrentUser', user)

          // create user object
          // doesn't seem to be working
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: this.signupForm.name
            })
            .then(() => {
              this.$store.dispatch('fetchUserProfile')
              this.$router.push('/events')
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>