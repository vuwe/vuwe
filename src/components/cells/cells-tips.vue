<template>
  <div :class="[{
    'weui-cells__tips': tips,
    'weui-cells__title': !tips
  }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tips: {
      type: Boolean,
      default: false
    }
  }
}
</script>