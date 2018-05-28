<template lang="html">
  <div class="field">
    <label :for="label" v-if="label">{{ label }}</label>
    <slot/>
  </div>
</template>

<script>
export default {
  props: ['label']
}
</script>

<style lang="css">
.field {
  margin-bottom: 24px;
}
.field.-shadow input {
  border: 0;
}
</style>
