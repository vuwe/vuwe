<template>
  <div class="icon-box">
    <i :class="[{
      'weui-icon-success': success,
      'weui-icon-info': info,
      'weui-icon-warn': danger,
      'weui-icon-warn weui-icon_msg-primary': warn,
      'weui-icon-waiting': waiting
    }, {
      'weui-icon_msg': !warn
    }]"></i>
    <div class="icon-box__ctn">
      <h3 class="icon-box__title">{{title}}</h3>
      <p class="icon-box__desc">{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    success: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    waiting: {
      type: Boolean,
      default: false
    },
    title: {},
    desc: {}
  }
}
</script>