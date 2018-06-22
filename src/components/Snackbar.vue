<template>
  <div class="snackbar" :class="[snackbar -text-primary]">
    <Icon
      v-if="iconName"
      :name="iconName"
      width="60"
      height="60" />
    <div class="body">
      <slot name="header"></slot>
      <slot name="paragraph"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    iconName: String,
    barState: String
  },
  computed: {
    stateColor() {
      switch (this.barState) {
        case 'success':
          return '-text-primary'
        case 'error':
          return '-text-error'
        case 'info':
          return '-text-gray'
        default:
          return '-text-gray'
      }
    }
  }
}
</script>

<style scoped>
.snackbar {
  display: flex;
  align-items: center;
  margin: 1em 0 1em;
}
.snackbar > .body * {
  margin: 0;
}
.snackbar > .icon {
  margin-right: 1em;
}
</style>
