<template>
  <label class="weui-cell weui-check__label" :for='forItem' :checked='checked' @click='onItemClick'>
    <div class="weui-cell__hd">
      <input type="checkbox" class="weui-check" :name="name" :id='forItem' :disabled='disabled' :checked='checked'>
      <i class="weui-icon-checked"></i>
    </div>
    <div class="weui-cell__bd">
      <p>
        <slot></slot>
      </p>
    </div>
  </label>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    forItem: {
      type: String
    },
    name: {
      type: String,
      default: 'checkbox'
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  label > * { pointer-events: none; }
</style>