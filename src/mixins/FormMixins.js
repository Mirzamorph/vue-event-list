export const FormFieldMixin = {
  props: {
    label: String,
    value: [String, Number]
  },
  methods: {
    updateValue($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
