<template>
  <svg class='icon' v-bind='$props'>
    <use v-bind='{'xlink:href':'feather-sprite.svg#'+name}'/>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  }
}
</script>

<style scoped>
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
