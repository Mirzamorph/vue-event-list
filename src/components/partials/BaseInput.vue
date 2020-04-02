<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
