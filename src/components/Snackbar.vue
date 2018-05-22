<template>
  <div class="snackbar">
    <slot name="header"></slot>
    <slot name="paragraph"></slot>
  </div>
</template>

<script>
export default {
  name: 'Snackbar'
}
</script>

<style scoped>
.snackbar {
  border-width: 1px;
  border-style: solid;
  background-color: green;
}
</style>
