<template>
  <button @click.prevent="$emit('click', $event)" class="button" :class="buttonClass">
    <slot>Button</slot> <!-- default content: 'Button' -->
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