<template>
  <Field>
    <label :for="label" v-if="label">{{ label }}</label>
    <input
      :id="label"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    />
    <span @click="dismissError" v-if="error && errorDisplayed">{{ error }}</span>
  </Field>
</template>

<script>
import Field from '@/components/Field.vue'

export default {
  name: 'TextInput',
  components: { Field },
  props: {
    value: {
      required: true
    },
    error: String,
    label: String
  },
  inheritAttrs: false,
  data() {
    return {
      errorDisplayed: false
    }
  },
  methods: {
    dismissError() {
      this.errorDisplayed = false
    },
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  },
  watch: {
    error(newValue, oldValue) {
      if (newValue && !oldValue && !this.errorDisplayed) {
        this.errorDisplayed = true
      }
    }
  }
}
</script>
