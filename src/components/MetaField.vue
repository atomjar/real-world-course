<template>
  <span class="meta">
    <icon v-if="iconName" :name="iconName"></icon>
    <slot></slot>
  </span>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'MetaField',
  components: {
    Icon
  },
  props: {
    iconName: String
  }
}
</script>

<style scoped>
.meta {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.meta > .icon {
  margin-right: 6px;
}
</style>
