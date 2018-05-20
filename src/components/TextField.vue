<template>
  <Field>
    <label :for="label" v-if="label">{{ label }}</label>
    <!-- <input :value="value" v-bind="$attrs" @input="onInput"> -->
    <input
      :id="label"
      :value="value"
      v-bind="$attrs"
      @input="onInput"
    />
    <span @click="dismissError" v-if="error && errorDisplayed">{{ error }}</span>
  </Field>
</template>

<script>
import inputFieldMixin from '@/mixins/inputFieldMixin'

export default {
  name: 'Input',
  mixins: [inputFieldMixin],
  /*any attrributs added to this component that are not registered
    as props will not be added to the root element of this component
    It will be added to element bound with $attrs which is input element in this case.
    This makes the component more like a native input element. We can even
    bind the event listeners this way if you think its not much complicated.
  */
  inheritAttrs: false,
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
