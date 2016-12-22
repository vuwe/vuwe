<template>
  <a href="javascript:;" :class="[{'weui-bar__item_on': value === $parent.tabIndex && !disabled}, 'weui-tabbar__item vw-nav-item']" :disabled="disabled" @click="select">
    <span class="vw-nav-item-content">
      <div class="weui-tabbar__icon" v-if="icon">
        <i :class="icon" aria-hidden="true"></i>
      </div>
      <img :src="img" alt="" class="weui-tabbar__icon" v-if="img">
      <vw-badge :value="infoNum" :dot="dot"></vw-badge>
      <p class="weui-tabbar__label">{{title}}</p>
    </span>
  </a>
</template>

<script>
import vwBadge from 'components/badges/badge.vue'

export default {
  props: {
    img: {},
    title: {},
    value: {},
    infoNum: {},
    icon: {},
    dot: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    select (e) {
      this.$parent.tabIndex = this.value
      this.$emit('click', e)
    }
  },
  components: {
    vwBadge
  }
}
</script>

<style lang="less">
  .vw-nav-item {
    &-content {
      display: inline-block;
      position: relative;
    }
  }
</style>