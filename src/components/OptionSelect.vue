<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select :value="value" @change="onChange" v-bind="$attrs">
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    options: {
      type: Array,
      required: true
    },
    label: String
  },
  methods: {
    onChange(ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
