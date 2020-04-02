<template>
  <div class="field">
    <label>{{ label }}</label>
    <input
      type="text"
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
    }
  }
}
</script>
