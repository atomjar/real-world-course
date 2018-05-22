<template>
  <div class="snackbar -text-primary">
    <icon v-if="hasIcon" :name="iconName" width="60" height="60"></icon>
    <div>
      <slot name="header"></slot>
      <slot name="paragraph"></slot>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: 'Snackbar',
  components: {
    Icon
  },
  props: {
    hasIcon: {
      type: Boolean,
      default: false
    },
    iconName: String
  }
}
</script>

<style scoped>
.snackbar {
  display: flex;
  align-items: center;
  margin: 0 0 1em;
}
.snackbar h4,
.snackbar p {
  margin: 0;
}
.snackbar > .icon {
  margin-right: 1em;
}
</style>
