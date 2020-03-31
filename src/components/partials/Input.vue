<template>
  <div class="field">
    <label>Title</label>
    <input v-model="event.title" type="text" placeholder="Add an event title" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    }
  }
}
</script>
