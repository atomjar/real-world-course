<template>
  <div>
      <form v-if="showLoginForm" @submit.prevent>
          <h1>Login</h1>

          <TextInput
            v-model="loginForm.email"
            type="text"
            placeholder="you@email.com"
            label="Email"/>

          <TextInput
            v-model="loginForm.password"
            type="password"
            placeholder="******"
            label="Password"/>

          <Button
            @click="login"
            class="-fill-gradient">
            Log In
          </Button>

          <Button
            @click="toggleForm">
            Create an Account
          </Button>
      </form>

      <form v-else @submit.prevent>
        <h1>Sign up</h1>

        <TextInput
          v-model.trim="signupForm.name"
          type="text"
          placeholder="Your Name"
          label="Name"/>

        <TextInput
          v-model.trim="signupForm.email"
          type="text" placeholder="you@email.com"
          label="Email"/>

        <TextInput
          v-model.trim="signupForm.password"
          type="password"
          placeholder="*****"
          label="Password"/>

        <Button
          @click="signup"
          class="-fill-gradient">
          Sign Up
        </Button>

        <Button
          @click="toggleForm">
          Back to Log In
        </Button>

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
