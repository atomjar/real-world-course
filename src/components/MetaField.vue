<template>
  <span class="meta">
    <icon v-if="iconName" :name="iconName"></icon>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'MetaField',
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
