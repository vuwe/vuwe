<template>
    <input :class="[{
    'weui-switch__red': warn
    }, 'weui-switch']" type="checkbox" v-model='inputValue' :disabled='disabled'>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    warn: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (newVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>

<style lang="less">
  .weui-switch__red:checked {
    border-color: #E64340;
    background-color: #E64340;
  }
</style>