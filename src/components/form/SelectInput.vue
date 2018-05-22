<template>
  <Field :label="label">
    <select :value="value" 
            @change="updateValue" 
            v-bind="$attrs">
      <option disabled selected value></option>
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
import inputFieldMixin from '@/mixins/inputFieldMixin'

export default {
  name: 'SelectInput',
  mixins: [inputFieldMixin],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String
    }
  }
}
</script>
