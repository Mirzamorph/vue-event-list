<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <base-select
        label="Select a category"
        v-model="event.category"
        :items="categories"
        :class="{ error: $v.event.category.$error }"
      />

      <h3>Name & describe your event</h3>
      <base-input
        label="Title"
        placeholder="Add an event title"
        v-model="event.title"
        :class="{ error: $v.event.title.$error }"
      />
      <base-input
        label="Description"
        placeholder="Add a description"
        v-model="event.description"
        :class="{ error: $v.event.description.$error }"
      />

      <h3>When is your event?</h3>

      <base-input
        label="Date"
        v-model="event.date"
        type="date"
        :min="minimalDate"
        max="2025-01-01"
        :class="{ error: $v.event.date.$error }"
      />
      <base-input label="Select a time" v-model="event.time" type="time" 
        :class="{ error: $v.event.category.$error }"/>

      <base-button type="submit">Submit</base-button>
    </form>
  </div>
</template>

<script>
// import NProgress from 'nprogress'
import moment from 'moment'
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      categories: this.$store.state.event.categories,
      minimalDate: moment().format('YYYY-MM-DD'),
      event: {
        id: null,
        title: '',
        time: '',
        date: '',
        description: '',
        category: ''
      }
    }
  },
  validations: {
    event: {
      title: { required },
      time: { required },
      date: { required },
      category: { required },
      description: { required }
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch()
      // NProgress.start()
      // this.$store
      //   .dispatch('event/createEvent', this.event)
      //   .then(event => {
      //     if (!event) return
      //     this.$router.push({
      //       name: 'event-show',
      //       params: { id: event.id }
      //     })
      //   })
      //   .catch(() => {
      //     NProgress.done()
      //   })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
