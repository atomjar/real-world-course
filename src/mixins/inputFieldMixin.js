import Field from '@/components/form/Field'

export default {
  components: { Field },
  props: {
    value: {
      required: true
    },
    error: String,
    label: String
  },
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
