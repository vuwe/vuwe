<template>
  <div :class="{'weui-skin_android': android}" v-if="showIt">
    <div class="weui-mask" style="opacity: 1;"></div>
    <transition name="popup">
      <div class="weui-dialog" v-show="show">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{dialogObj.title}}</strong></div>
        <div class="weui-dialog__bd" v-html="dialogObj.content">
        </div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" v-if="dialogObj.assistBtn" @click="cbFn(dialogObj.assistFn)">{{dialogObj.assistBtn}}</a>
          <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="cbFn(dialogObj.mainFn)">{{dialogObj.mainBtn}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    android: {
      type: Boolean,
      default: false
    },
    showIt: {
      type: Boolean,
      default: false
    },
    dialogObj: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      show: this.showIt
    }
  },
  watch: {
    showIt (newVal) {
      setTimeout(() => {
        this.show = newVal
      }, 100)
      if (newVal) {
        document.body.style.overflow = 'hidden'
      }
    }
  },
  methods: {
    cancel () {
      this.show = false
      document.body.style.overflow = ''
      this.$emit('hide')
      'remove' in window.Element.prototype ? this.$el.remove() : this.$el.parentNode.removeChild(this.$el)
    },
    cbFn (fn) {
      if (fn) {
        fn()
      }
      this.cancel()
    }
  }
}
</script>

<style lang="less">
  .popup-enter-active,
  .popup-leave-active {
    transition: all .2s;
  }
  .popup-enter,
  .popup-leave-active {
    opacity: 0;
  }

  .weui-dialog {
    left: 10%;
    top: 35%;
    max-width: none;
    transform: scale3d(1, 1, 1);
  }
</style>