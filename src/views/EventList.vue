<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    fetchEvents() {
      EventService.getEvents()
        .then(response => (this.events = response.data))
        .catch(error => console.warn(error))
    }
  },
  created() {
    this.fetchEvents()
  }
}
</script>
