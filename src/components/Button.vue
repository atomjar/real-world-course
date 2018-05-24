<template>
  <button @click="onClick" :class="buttonClass">
    <slot>Button</slot> <!-- default content: 'Buttton' -->
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
