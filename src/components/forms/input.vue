<template>
  <div :class="[{
    'weui-cell_vcode': addon, 
    'weui-cell_warn': warn, 
    'weui-cell_switch': isSwitch, 
    'weui-cell_select weui-cell_select-before': selectBefore, 
    'weui-cell_select': select, 
    'weui-cell_select weui-cell_select-after': selectAfter
  }, 'weui-cell']">
    <div class="weui-cell__hd" v-if='label || selectBefore'>
      <label class="weui-label" v-if='!select && !selectBefore'>{{label}}</label>
      <slot name='selector-before'></slot>
    </div>

    <div class="weui-cell__bd">
      <slot name='selector'></slot>
      <slot name="selector-after"></slot>
      <input class="weui-input" 
        :type="setInputObj.type" 
        :placeholder="setInputObj.placeholder"
        :pattern="setInputObj.pattern"
        :autofocus="setInputObj.autofocus" 
        :value="value" 
        @click='onItemClick' 
        @input='onItemInput' 
        @change='onItemChange' 
        @focus='onItemFocus' 
        @blur='onItemBlur'
        v-if="!select && !selectAfter"
      >
    </div>

    <div class="weui-cell__ft" v-if='addon'>
      <slot name="addon"></slot>
    </div>
    <div class="weui-cell__ft" v-if='warn'>
      <i class="weui-icon-warn"></i>
    </div>
    <div class="weui-cell__ft" v-if='sucess'>
      <i class="weui-icon-success"></i>
    </div>
    <div class="weui-cell__ft" v-if='isSwitch'>
      <slot name="switch"></slot>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  computed: {
    setInputObj () {
      if (this.inputConfig) {
        return JSON.parse(this.inputConfig)
      } else {
        return false
      }
    }
  },
  props: {
    addon: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    sucess: {
      type: Boolean,
      default: false
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    selectBefore: {
      type: Boolean,
      default: false
    },
    selectAfter: {
      type: Boolean,
      default: false
    },
    select: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    inputConfig: {
      type: String
    },
    tips: {
      type: String
    },
    value: {
      type: String
    }
  }
}
</script>

<style>
  .weui-switch {
    -webkit-appearance: none;
  }
</style>