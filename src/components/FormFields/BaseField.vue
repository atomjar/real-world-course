<template>
  <div class="field">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseField'
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
