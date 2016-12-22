<template>
  <div class="weui-tabbar vw-tab-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      tabIndex: this.value
    }
  },
  watch: {
    tabIndex (newVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>

<style>
.vw-tab-nav {
  position: fixed;
  bottom: 0;
}
</style>