<template lang="html">
  <div class="notification-container">
    <NotificationBar
      v-for="notification of notifications"
      :key="notification.message"
      :notification="notification"
      @close="removeNotification"
    />
  </div>
</template>

<script>
import NotificationBar from './NotificationBar'

export default {
  components: { NotificationBar },
  computed: {
    notifications() {
      return this.$store.state.notifications
    }
  },
  methods: {
    removeNotification(notification) {
      this.$store.commit('REMOVE_NOTIFICATION', notification.message)
    }
  }
}
</script>

<style lang="css">
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
