<template>
  <svg class="icon" v-bind="$props">
    <use v-bind="{'xlink:href':'feather-sprite.svg#'+name}"/></svg>
  </svg>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style>
</style>
