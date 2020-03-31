<template>
  <div>
    <label>Select a category</label>
    <select v-model="event.category">
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
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
