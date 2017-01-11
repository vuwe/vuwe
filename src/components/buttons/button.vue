<template>
  <a href="javascript:;" :class="[{
  'weui-btn_primary': primary, 
  'weui-btn_warn': warn,
  'weui-btn_default': origin,
  'weui-btn_plain-default': plain,
  'weui-btn_plain-primary': plainPrimary,
  'weui-btn_mini': mini
  }, 'weui-btn', disabledType]" :disabled='disabled' @click='onItemClick'>
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    origin: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    plainPrimary: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabledType () {
      if (this.disabled & !this.plain) {
        return "weui-btn_disabled"
      } else if (this.disabled & this.plain) {
        return "weui-btn_plain-disabled"
      } else {
        return
      }
    }
  }
}
</script>
