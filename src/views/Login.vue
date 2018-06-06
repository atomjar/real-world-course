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
export default {
  name: 'login',
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
      this.$store
        .dispatch('userLogin', this.loginForm)
        .then(this.$router.push('/'))
    },
    signup() {
      this.$store
        .dispatch('userSignUp', this.signupForm)
        .then(this.$router.push('/'))
    }
  }
}
</script>