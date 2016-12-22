<template>
  <div>
    <div class="weui-mask_transparent" v-show="showIt"></div>
    <transition name="fade">
      <div class="weui-toast vw-toast" :class="{'vw-toast__normal': !success && !loading && !icon}" v-show="showIt">
        <i :class="[{
          'weui-icon-success-no-circle': success,
          'weui-loading': loading
        }, 'weui-icon_toast vw-toast-icon']" v-if="success || loading"></i>
        <i :class="icon" class="vw-toast-icon_cus" v-if="icon"></i>
        <p class="weui-toast__content vw-toast_content">{{content}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showIt: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    content: {},
    icon: {}
  }
}
</script>

<style lang="less">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  .vw-toast {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 50%;
    transform: translateY(-50%);
    &.vw-toast__normal {
      min-height: 2.6em;
      .vw-toast_content {
        margin: 0;
      }
    }
  }
  .vw-toast-icon_cus {
    font-size: 55px;
    margin-top: 22px;
  }
</style>