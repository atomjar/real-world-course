<template>
  <div class="field">
    <label v-if="label">{{label}}</label>
    <select v-model="selected" @change="onChange" v-bind="$attrs">
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
  data() {
    return {
      /*
      if this component's v-model has a pre-selected value
      and we cant set the v-model of the above select element to 
      the prop 'value' as props are unidirectional and should not be modified
      */
      selected: this.value
    }
  },
  watch: {
    //whenever value changes the 'selected' data property is updated
    value: function(newValue) {
      this.selected = newValue
    }
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
