<template>
  <Field class="-shadow">
    <input v-model="filter"
           type="text"
           :placeholder="placeholder">
  </Field>
</template>

<script>
import Field from '@/components/Field.vue'

export default {
  name: 'FilterInput',
  components: {
    Field
  },
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
