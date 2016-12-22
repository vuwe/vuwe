<template>
  <div class="category__item">
    <div class="weui-flex" @click="showList">
      <p class="weui-flex__item">{{title}}</p>
      <img :src="img" alt="" v-if="img">
      <div class="vw-category-icon" v-if="icon">
        <i :class="icon" aria-hidden="true"></i>
      </div>
    </div>
    <transition name="toggle">
      <div class="category-content" v-show="onShow">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    img: {},
    value: {},
    icon: {}
  },
  data () {
    return {
      showCategory: false
    }
  },
  computed: {
    onShow () {
      if (!this.$parent.expand) {
        return this.value === this.$parent.index
      } else {
        return this.showCategory
      }
    }
  },
  methods: {
    showList (e) {
      if (!this.$parent.expand) {
        if (this.$parent.index === this.value) {
          this.$parent.index = ''
        } else {
          this.$parent.index = this.value
        }
      } else {
        this.showCategory = !this.showCategory
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less">
  .weui-flex {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
  }
  .vw-category-icon {
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 20px;
  }
  .category-content {
    position: relative;
    top: 0px;
  }
  .toggle-enter-active,
  .toggle-leave-active {
    transition: all .2s;
  }
  .toggle-enter,
  .toggle-leave-active {
    opacity: 0;
    top: -50px;
    overflow: hidden;
  }
</style>