<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      @input="$emit('input', $event.target.value)"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
.error input {
  border-color: red;
}
</style>
