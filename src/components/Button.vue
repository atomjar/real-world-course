<template>
  <button class="button primary" :class="buttonClass">
    <slot>Button</slot> <!-- default content: 'Buttton' -->
  </button>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return {
        error: this.error
      }
    }
  }
}
</script>

<style scoped>
.button {
  padding: 0.75em 1em;
  color: white;
}

.button.primary {
  background: #42b883;
}

.button.error {
  background: #c1093a;
}
</style>
