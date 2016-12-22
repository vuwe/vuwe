<template>
  <i :class="{
    'weui-icon-success': success,
    'weui-icon-success-no-circle': nike,
    'weui-icon-circle': circle,
    'weui-icon-warn': warn,
    'weui-icon-download': download,
    'weui-icon-info-circle': info,
    'weui-icon-cancel': cancel,
    'weui-icon-search': search,
    'weui-loading': loading,
  }" @click='onItemClick'></i>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    success: {
      type: Boolean,
      default: false
    },
    nike: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    download: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>