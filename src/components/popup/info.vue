<template>
  <transition name="fade-down">
    <div class="vw-info" :class="{'vw-info__success': type === 'success', 'vw-info__warn': type === 'warn'}" v-if="showIt">
      <div class="vw-info-container">
        {{content}}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    showIt: {
      type: Boolean,
      default: false
    },
    content: {}
  }
}
</script>

<style lang="less">
  .vw-info {
    position: absolute;
    top: 0;
    z-index: 999;
    height: 40px;
    line-height: 40px;
    width: 100%;
    color: #fff;
    background: rgba(0, 0, 0, .6);
    text-align: center;
    overflow: hidden;
    &-container {
      a {
        text-decoration: underline;
        color: inherit;
      }
    }
  }
  .vw-info__success {
    background: #1aad19;
  }
  .vw-info__warn {
    background: #e64340;
  }

  .fade-down-enter-active, .fade-down-leave-active {
    transition: all .3s;
  }
  .fade-down-enter, .fade-down-leave-active {
    top: -40px;
  }
</style>