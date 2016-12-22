<template>
  <div :class="[{
  'weui-cells_radio': radio,
  'weui-cells_checkbox': checkbox,
  'weui-cells_form': form,
  }, 'weui-cells']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    radio: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    form: {
      type: Boolean,
      default: false
    }
  }
}
</script>