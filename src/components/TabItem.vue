<template>
  <button class="tab-item" type="button">
    <slot/>
    <Icon
      v-if="iconName"
      :name="iconName" />
  </button>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'tab',
  components: { Icon },
  props: {
    iconName: String
  }
}
</script>

<style scoped>
.tab-item {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  padding: 0 5px;
  margin: 0 5px;
  background: transparent;
  border: none;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.tab-item:focus {
  outline: 0;
}
.tab-item.active {
  color: #39B982;
  border-bottom: solid 2px #39B982;
}
.tab-item > .icon {
  margin-left: 10px;
}
</style>
