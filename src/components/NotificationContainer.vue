<template>
  <div class="container">
    <transition name="toggle-slide">
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </transition>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Notification
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  right: 0;
  bottom: 20px;
  overflow-x: hidden;
}
.toggle-slide-enter-active,
.toggle-slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.toggle-slide-enter,
.toggle-slide-leave-to {
  transform: translateX(100%);
}
</style>
