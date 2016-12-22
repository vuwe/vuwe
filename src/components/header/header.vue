<template>
  <div class="vw-header" :style='style'>
    <div class="vw-header-wrapper">
      <h3 class="vw-header-wrapper-title">{{title}}</h3>
      <div class="vw-header-wrapper-left">
        <slot name="left"></slot>
      </div>
      <div class="vw-header-wrapper-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    style: {
      type: Object,
      default: () => {
        return {
          background: '#333',
          color: '#fff'
        }
      }
    },
    title: {}
  }
}
</script>

<style lang="less">
  .vw-header {
    height: 40px;
    line-height: 40px;
    width: 100%;
    position: fixed;
    &-wrapper {
      position: relative;
      &-left {
        position: absolute;
        left: 10px;
        color: #fff;
        a {
          color: inherit;
        }
      }
      &-right {
        position: absolute;
        right: 10px;
        color: #fff;
        font-size: 18px;
      }
      &-title {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        font-weight: normal;
      }
    }
  }
</style>