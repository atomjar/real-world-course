<template lang="html">
  <transition name="slide" v-if="show">
    <div class="notification-bar" :class="notificationClass">
      <Icon
        v-if="iconName"
        :name="iconName"
        width="60"
        height="60"/>
      <p>{{ notification.message }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    notification: Object,
    iconName: String
  },
  data() {
    return {
      show: true
    }
  },
  computed: {
    notificationClass() {
      return `-text-${this.notification.type}`
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false
      console.log('pop')
    }, 4000)
  }
}
</script>

<style lang="css">
.notification-bar {
  display: flex;
  align-items: center;
  margin: 1em 0 1em;
}
.notification-bar > .body * {
  margin: 0 0;
}
.notification-bar > .icon {
  margin-right: 1em;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s ease-in-out;
}
.slide-enter, .slide-leave-to {
  transform: translateX(150%);
  opacity: 0
}
</style>
