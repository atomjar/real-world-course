<template>
  <div class="media-block">
    <div class="media">
      <img v-if="imagePath" :src="imagePath">
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
.media-block.-img-circle > .media > img {
  border-radius: 50%;
}
.media-block > .media {
  max-width: 60px;
  max-height: 60px;
  margin-right: 1em;
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
