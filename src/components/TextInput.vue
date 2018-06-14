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
import inputFieldMixin from '@/mixins/inputFieldMixin'

export default {
  name: 'TextInput',
  mixins: [inputFieldMixin],
  inheritAttrs: false
}
</script>
