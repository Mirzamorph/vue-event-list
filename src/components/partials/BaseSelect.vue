<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select @input="$emit('input', $event.target.value)">
      <option value="">Select a category</option>
      <option v-for="item in items" :key="item" :selected="item === value">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.error select {
  border-color: red;
}
</style>
