<template>
  <div class="vw-steps">
    <template v-for="(step, i) in steps">
      <div :class="[{'vw-steps-processing': i === processing, 'vw-steps-done': i < processing}, 'vw-steps-item']">
        <i class="weui-icon-success vw-steps-item-icon"></i>
        <div class="vw-steps-item-num">{{i + 1}}</div>
        <div class="vw-steps-item-desc">{{step}}</div>
      </div>
      <div :class="[{'active': i < processing}, 'vw-steps-item__connect']" :style="lineWidth" v-if="i !== steps.length - 1"></div>
    </template>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => ['', '', '']
    },
    value: {
      type: String | Array,
      default: '0'
    }
  },
  computed: {
    lineWidth () {
      return this.steps.length > 3 ? { width: '5%' } : { width: '15%' }
    },
    processing () {
      return Number(this.value)
    }
  }
}
</script>

<style lang="less">
  .vw-steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 14px;
    transition: all ease .3s;
    &-item {
      height: 100%;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      &:first-child {
        justify-content: flex-start;
      }
      &:last-child {
        justify-content: flex-end;
      }
      &-icon {
        display: none;
      }
      &-num {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-right: 5px;
        color: #aaa;
        border: 1px solid #aaa;
        border-radius: 100%;
      }
      &-desc {
        color: #aaa;
      }
    }
    &-processing {
      .vw-steps-item-num {
        color: #3CC51F;
        border-color: #3CC51F;
      }
      .vw-steps-item-desc {
        color: #000;
      }
    }
    &-done {
      color: #3CC51F;
      .vw-steps-item-num {
        color: #3CC51F;
        border-color: #3CC51F;
      }
      .vw-steps-item-icon {
        display: inline-block;
        height: 20px;
        font-size: 20px;
      }
      .vw-steps-item-desc {
        color: #3CC51F;
      }
      .vw-steps-item-num {
        display: none;
      }
    }
    &-item__connect {
      height: 2px;
      width: 5%;
      background: #aaa;
      &.active {
        background: #3CC51F;
      }
    }
  }
</style>

