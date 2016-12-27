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
        this.$emit('on-click', e)
      }
    },
    onItemInput (e) {
      this.$emit('on-input', e.target.value)
    },
    onItemChange (e) {
      this.$emit('on-change', e.target.value)
    },
    onItemFocus (e) {
      this.$emit('on-focus', e)
    },
    onItemBlur (e) {
      this.$emit('on-blur', e)
    },
    onItemEnter (e) {
      this.$emit('on-enter', e)
    }
  }
}

export {
  childMixin
}
