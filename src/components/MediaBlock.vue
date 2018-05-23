<template>
  <div class="media-block">
    <img v-if="imageUrl" src="imageUrl" class="media">
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
    imageUrl: String
  }
}
</script>

<style scoped>
.media-block {
  display: flex;
}
.media-block > .media {
  min-width: 40px;
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
</style>
