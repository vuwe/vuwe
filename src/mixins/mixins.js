const childMixin = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onItemClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    },
    onItemInput (e) {
      this.$emit('input', e.target.value)
    },
    onItemChange (e) {
      this.$emit('change', e.target.value)
    },
    onItemFocus (e) {
      this.$emit('focus', e)
    },
    onItemBlur (e) {
      this.$emit('blur', e)
    },
    onItemEnter (e) {
      this.$emit('enter', e)
    }
  }
}

export {
  childMixin
}
