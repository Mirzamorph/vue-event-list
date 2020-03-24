<template>
  <div class="container">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
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
  right: 20px;
  bottom: 20px;
}
</style>
