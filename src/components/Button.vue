<template>
  <button :class="buttonClass">
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
.button.error {
  background: #c1093a;
}
</style>
