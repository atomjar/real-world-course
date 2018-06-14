<template>
  <div class="media-block">
    <div class="media" v-if="imagePath">
      <img :src="imagePath">
    </div>
    <div class="body">
      <slot name="header"></slot>
      <slot name="paragraph"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaBlock',
  props: {
    imagePath: String
  }
}
</script>

<style scoped>
.media-block {
  display: flex;
}
.media-block > .body {
  display: flex;
  flex-direction: column;
}
.media-block > .body * {
  margin-top: 0;
  margin-bottom: 0.5em;
}
.media-block > .body *:last-child {
  margin-bottom: 0;
}
</style>
