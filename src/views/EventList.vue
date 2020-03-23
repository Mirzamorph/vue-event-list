<template>
  <div>
    <h1>Events Listing</h1>
    <template v-if="!loading">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <Pagination v-if="totalCount" :totalPages="totalPages" />
    </template>
    <p v-else>Данные грузятся</p>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import Pagination from '@/components/Pagination'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard,
    Pagination
  },
  data() {
    return {
      perPage: 3,
      totalCount: null
    }
  },
  computed: {
    ...mapState('event', ['events', 'loading']),
    totalPages() {
      return Math.ceil(this.totalCount / this.perPage)
    }
  },
  mounted() {
    const currentPage = this.$route.query.page || 1
    this.$store
      .dispatch('event/fetchEvents', {
        perPage: this.perPage,
        page: currentPage
      })
      .then(({ data, headers }) => {
        if (!data.length) this.$router.push({ name: '404' })
        this.totalCount = parseInt(headers['x-total-count'])
      })
  }
}
</script>
