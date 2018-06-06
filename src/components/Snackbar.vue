<template>
  <div class="snackbar -text-primary">
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
import Icon from '@/components/Icon.vue'
export default {
  name: 'Snackbar',
  components: {
    Icon
  },
  props: {
    iconName: String
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
