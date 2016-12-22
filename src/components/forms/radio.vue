<template>
  <label class="weui-cell weui-check__label" :for='forItem' :checked='checked'>
    <div class="weui-cell__bd">
      <p>
        <slot></slot>
      </p>
    </div>
    <div class="weui-cell__ft">
      <input type="radio" class="weui-check" :name="name" :id='forItem' :disabled='disabled' @click='onItemClick' :checked='checked'>
      <span class="weui-icon-checked"></span>
    </div>
  </label>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    forItem: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'radio'
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