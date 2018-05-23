<template>
  <button :class="buttonClass">
    <!-- default content displayed will be text 'Button' -->
    <slot>Button</slot>
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
