<template>
  <div>
    <input v-model="value"
           type="text"
           :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ''
    }
  },
  watch: {
    filter(value) {
      this.$emit('input', value.trim())
    }
  }
}
</script>

<style>
</style>
