<template>
  <span class="meta">
    <icon v-if="iconName" :name="iconName"></icon>
    <slot></slot>
  </span>
</template>

<script>
import Icon from '@/components/Icon'
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

<style>
</style>
