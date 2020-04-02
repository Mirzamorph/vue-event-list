<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <Pagination
      v-if="totalCount"
      :totalPages="totalPages"
      :key="$route.query.page"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import Pagination from '@/components/Pagination'
import { mapState } from 'vuex'
import store from '@/store'

function changePage(to, next) {
  const currentPage = to.query.page || 1
  store
    .dispatch('event/fetchEvents', {
      perPage: 3,
      page: currentPage
    })
    .then(({ data, headers }) => {
      to.params.totalCount = parseInt(headers['x-total-count'])
      next(() => {
        if (!data.length) this.$router.push({ name: '404' })
      })
    })
}

export default {
  components: {
    EventCard,
    Pagination
  },
  props: {
    totalCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState('event', ['events']),
    totalPages() {
      return Math.ceil(this.totalCount / 3)
    }
  },
  beforeRouteEnter(to, from, next) {
    changePage(to, next)
  },
  beforeRouteUpdate(to, from, next) {
    changePage(to, next)
  }
}
</script>
