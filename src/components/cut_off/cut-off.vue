<template>
  <div :class="[{
    'weui-loadmore_line': line,
    'weui-loadmore_line weui-loadmore_dot': !text
  }, 'weui-loadmore']">
    <i class="weui-loading" v-show="icon"></i>
    <span class="weui-loadmore__tips">{{text}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    icon: {
      type: Boolean,
      default: false
    },
    line: {
      type: Boolean,
      default: false
    }
  }
}
</script>