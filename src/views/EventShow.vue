<template>
  <div class="box" v-if="event">
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <h2>Event details</h2>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('event/fetchEvent', to.params.id).then(event => {
      to.params.event = event
      next()
    })
  }
}
</script>

<style scoped>
.box {
  margin-top: 2em;
}
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
