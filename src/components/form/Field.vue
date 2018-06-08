<template>
  <div class="field">
    <label :for="label" v-if="label">{{ label }}</label>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: ['label']
}
</script>

<style>
.field {
  margin-bottom: 24px;
}
.field.-shadow input {
  border: 0;
}
</style>
