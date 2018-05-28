<template>
  <button @click="onClick" class="button" :class="buttonClass">
    <slot>Button</slot> <!-- default content: 'Button' -->
  </button>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
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
