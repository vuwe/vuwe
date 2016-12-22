<template>
  <div class="category-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    categoryIndex: {},
    expand: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      index: this.categoryIndex
    }
  }
}
</script>

<style lang="less">
  .category__item {
    margin: 10px 0;
  }
</style>