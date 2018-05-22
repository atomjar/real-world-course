<template>
  <div>
    <input v-model="filter" 
           type="text" 
           :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'FilterInput',
  props: {
    placeholder: String
  },
  data() {
    return {
      filter: ''
    }
  },
  watch: {
    filter(newFilter) {
      this.$emit('filter-emitted', newFilter.trim())
    }
  }
}
</script>

<style>
</style>