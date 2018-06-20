<template lang="html">
  <div class="notificationBar">
    <Icon
      v-if="iconName"
      :name="iconName"
      width="60"
      height="60"/>
    <p :class="notificationClass">{{ notification.message }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  components: {
    Icon
  },
  props: {
    notification: Object,
    iconName: String
  },
  computed: {
    notificationClass() {
      return `notification-${this.notification.type}`
    }
  },
  mounted() {
    setTimeout(() => {
      this.$emit('close', this.notification)
    }, 2500)
  }
}
</script>

<style lang="css">
.notificationBar {
  display: flex;
  align-items: center;
  margin: 1em 0 1em;
}
.notificationBar > .body * {
  margin: 0;
}
.notificationBar > .icon {
  margin-right: 1em;
}

.notification-error {
  color: black;
}
.notification-success {
  color: #39b982;
}
</style>
