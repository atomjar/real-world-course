<template>
  <Field>
    <label v-if="label">{{ label }}</label>
    <select :value="value" @change="onChange" v-bind="$attrs">
      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
    </select>
    <span @click="dismissError" v-if="error && errorDisplayed">{{ error }}</span>
  </Field>
</template>

<script>
import inputFieldMixin from '@/mixins/inputFieldMixin'

export default {
  name: 'Select',
  mixins: [inputFieldMixin],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    onChange(ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>
