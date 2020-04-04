<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      @input="$emit('input', $event.target.value)"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { FormFieldMixin } from '@/mixins/FormMixins'

export default {
  mixins: [FormFieldMixin],
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.error input {
  border-color: red;
}
</style>
