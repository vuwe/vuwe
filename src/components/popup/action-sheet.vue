<template>
  <div :class="{'weui-skin_android': android}" v-if="show">
    <div class="weui-mask" style="opacity: 1;" @click="cancel"></div>
    <div :class="[{'weui-actionsheet_toggle': toggleIt}, 'weui-actionsheet']">
      <div class="weui-actionsheet__menu">
        <slot></slot>
      </div>
      <div class="weui-actionsheet__action" v-if="!noCancel">
        <div class="weui-actionsheet__cell" @click="cancel">取消</div>
      </div>
    </div>
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
    noCancel: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.showIt,
      toggleIt: false
    }
  },
  watch: {
    showIt (newVal) {
      this.show = newVal
      if (newVal) {
        document.body.style.overflow = 'hidden'
        setTimeout(() => {
          this.toggleIt = true
        }, 100)
      }
    }
  },
  methods: {
    cancel () {
      this.toggleIt = false
      setTimeout(() => {
        this.show = false
        document.body.style.overflow = ''
        this.$emit('hide')
      }, 200)
    }
  }
}
</script>

<style lang="less">
  .weui-actionsheet__menu {
    div {
      position: relative;
      padding: 10px 0;
      text-align: center;
      font-size: 18px;
      &:active {
        background-color: #ECECEC;
      }
    }
  }
  .weui-skin_android {
    .weui-actionsheet__menu {
      div {
        padding: 13px 24px;
        font-size: 16px;
        line-height: 1.4;
        text-align: left;
        &:first-child {
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }
        &:before {
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          height: 1px;
          border-top: 1px solid #D9D9D9;
          color: #D9D9D9;
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        &:first-child:before {
          display: none;
        }
      }
    }
  }
</style>