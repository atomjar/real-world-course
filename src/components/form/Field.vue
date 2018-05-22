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

.field label {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
}
</style>
