
<template> 
  <div class="field"> 
    <input :value="value" v-bind="$attrs" @input="onInput($event.target.value)"> 
  </div> 
</template> 
 
<script>
export default {
  name: 'Input',
  /*any attrributs added to this component that are not registered
    as props will not be added to the root element of this component
    It will be added to element bound with $attrs which is input element in this case.
    This makes the component more like a native input element. We can even
    bind the event listeners this way if you think its not much complicated.
  */
  inheritAttrs: false,
  props: {
    value: String
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script> 
 
<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
