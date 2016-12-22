<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress vw-progress" :style="styleObj"></div>
    </div>
    <a href="javascript:;" class="weui-progress__opr" @click="onItemClick">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    value: {
      type: String,
      default: '0'
    }
  },
  computed: {
    styleObj () {
      return {
        width: `${Number(this.value)}%`
      }
    }
  }
}
</script>

<style lang="less">
  .vw-progress {
    transition: all ease .4s;
  }
</style>