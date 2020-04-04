<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select @input="updateValue">
      <option value="">{{ label }}</option>
      <option v-for="item in items" :key="item" :selected="item === value">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
import { FormFieldMixin } from '@/mixins/FormMixins'

export default {
  mixins: [FormFieldMixin],
  props: {
    items: Array
  }
}
</script>

<style lang="scss" scoped>
.error select {
  border-color: red;
}
</style>
