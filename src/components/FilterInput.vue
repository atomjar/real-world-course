<template>
  <div class="input-inline -button-right">
    <input v-model="filter"
           type="text"
           :placeholder="placeholder"
           class="-shadow">

    <base-button class="-text-gray -icon-center">
      <icon name="search"></icon>
    </base-button>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'FilterInput',
  components: {
    Icon
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

<style>
</style>
