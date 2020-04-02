<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      
      <base-select
        label="Select a category"
        v-model="event.category"
        :items="categories"
      />

      <h3>Name & describe your event</h3>
      <base-input
        label="Title"
        placeholder="Add an event title"
        v-model="event.title"
      />
      <base-input
        label="Description"
        placeholder="Add a description"
        v-model="event.description"
      />

      <h3>When is your event?</h3>

      <base-input label="Date" v-model="event.date" type="date" />
      <base-input label="Select a time" v-model="event.time" type="time" />

      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import NProgress from 'nprogress'

export default {
  data() {
    return {
      categories: this.$store.state.event.categories,
      event: {
        id: null,
        title: '',
        date: '',
        time: '',
        description: '',
        category: ''
      }
    }
  },
  methods: {
    createEvent() {
      NProgress.start()
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(event => {
          if (!event) return
          this.$router.push({
            name: 'event-show',
            params: { id: event.id }
          })
        })
        .catch(() => {
          NProgress.done()
        })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
