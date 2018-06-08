<template>
  <Field :label="label">
    <select :value="value"
            @change="updateValue"
            v-bind="$attrs">
      <option disabled selected value>{{ label }}</option>
      <option v-for="option in options"
              :value="option"
              :key="option">
              {{ option }}
      </option>
    </select>
    <span @click="dismissError"
          v-if="error && errorDisplayed">
          {{ error }}
    </span>
  </Field>
</template>

<script>
import Field from '@/components/form/Field.vue'

export default {
  name: 'SelectInput',
  components: {
    Field
  },
  props: {
    options: {
      type: Array,
      required: true
    },
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
