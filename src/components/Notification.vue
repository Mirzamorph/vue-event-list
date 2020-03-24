<template>
  <p :class="notification.type">{{ notification.message }}</p>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  methods: mapActions('notification', ['remove']),
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification)
    }, 4000)
  },
  destroyed() {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  border-radius: 20px;
}
.success {
  background-color: green;
  color: #fff;
}
.error {
  background-color: red;
  color: #fff;
}
</style>
