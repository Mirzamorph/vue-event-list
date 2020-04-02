<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select @input="$emit('input', $event.target.value)">
      <option v-for="item in items" :key="item">{{ item }}</option>
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
