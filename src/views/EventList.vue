<template>
  <div>
    <h1>Events Listing</h1>
    <template v-if="!loading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>Данные грузятся</p>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  computed: mapState(['events', 'loading']),
  created() {
    this.$store.dispatch('fetchEvents')
  }
}
</script>
