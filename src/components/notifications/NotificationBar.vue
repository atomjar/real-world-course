<template lang="html">
  <div @click="$emit('close', notification)">
    <Snackbar
      v-if="notification.type === 'success'"
      iconName="check-circle"
    >
      <h4 slot="header">Success!</h4>
      <p slot="paragraph">{{ notification.message }}</p>
    </Snackbar>
    <div v-else :class="notificationClass" class="notification-bar">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import Snackbar from '../Snackbar'

export default {
  components: { Snackbar },
  props: ['notification'],
  computed: {
    notificationClass() {
      return `notification-${this.notification.type}`
    }
  },
  mounted() {
    if (this.notification.requireUserAction) return
    setTimeout(() => {
      this.$emit('close', this.notification)
    }, 2500)
  }
}
</script>

<style lang="css">
.notification-bar {
  padding: 10px 20px;
  background: blue;
  color: white;
  margin-bottom: 20px;
}

.notification-error {
  background: red;
}

.notification-success {
  background: green;
}

.notification-button {
  background: none;
  color: white;
  border: none;
  font-size: 20px;
}
</style>
