<template>
  <div class="vw-list__item">
    <router-link 
    :class="[{'weui-cell_access': isLink, 'in-transition': inTransition}, 'weui-cell vw-list-content']" 
    @click.native='onItemClick' 
    @touchstart.native='touchStart' 
    @touchmove.native='touchMove' 
    @touchend.native='touchEnd' 
    :to='link' 
    v-if='hasRouter && link !=="javascript:;"'
    style="transform: translateX(0px);-webkit-transform: translateX(0px);">
      <div class="weui-cell__hd" v-if="img">
        <img :src="img" alt="" style="width:25px;height:25px;object-fit:cover;margin-right:5px;display:block">
      </div>
      <div class="weui-cell__hd vw-list-icon" v-if="icon" :style="colorObj">
        <i :class="icon" aria-hidden="true"></i>
      </div>
      <div class="weui-cell__bd">
        <p>{{title}}</p>
      </div>
      <div class="weui-cell__ft">{{desc}}</div>
    </router-link>

    <a 
    :class="[{'weui-cell_access': isLink, 'in-transition': inTransition}, 'weui-cell vw-list-content']" 
    @click='onItemClick' 
    @touchstart='touchStart' 
    @touchmove='touchMove' 
    @touchend='touchEnd' 
    :href='link' 
    v-if='!hasRouter || link === "javascript:;"'
    style="transform: translateX(0px);-webkit-transform: translateX(0px);">
      <div class="weui-cell__hd" v-if="img">
        <img :src="img" alt="" style="width:25px;height:25px;object-fit:cover;margin-right:5px;display:block">
      </div>
      <div class="weui-cell__hd vw-list-icon" v-if="icon" :style="colorObj">
        <i :class="icon" aria-hidden="true"></i>
      </div>
      <div class="weui-cell__bd">
        <p>{{title}}</p>
      </div>
      <div class="weui-cell__ft">{{desc}}</div>
    </a>

    <div class="vw-buttons">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
import badge from 'components/badges/badge.vue'

export default {
  mixins: [childMixin],
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    desc: {
      type: String
    },
    link: {
      type: String,
      default: 'javascript:;'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLink () {
      return this.link !== 'javascript:;'
    },
    colorObj () {
      return {
        color: this.iconColor
      }
    },
    hasRouter () {
      return this.$router !== 'undefined'
    },
    touchBar () {
      return this.$el.children[0]
    }
  },
  data () {
    return {
      startX: 0,
      currentX: 0,
      deltaX: 0,
      unSwipe: false,
      inTransition: false
    }
  },
  components: {
    badge
  },
  methods: {
    touchStart (e) {
      this.inTransition = false
      if (this.$el.children[1].innerHTML !== '') {
        this.startX = e.touches[0].pageX
        this.currentX = this.touchBar.style.transform.match(/translateX\((.*)px/)[1]
      }
    },
    touchMove (e) {
      if (this.$el.children[1].innerHTML !== '') {
        this.deltaX = e.changedTouches[0].pageX - this.startX
        this.touchBar.style.transform = `translateX(${Number(this.currentX) + this.deltaX}px)`
        this.touchBar.style.webkitTransform = `translateX(${Number(this.currentX) + this.deltaX}px)`
      }
    },
    touchEnd (e) {
      this.inTransition = true
      if (this.$el.children[1].innerHTML !== '') {
        this.currentX = this.touchBar.style.transform.match(/translateX\((.*)px/)[1]
        if (this.currentX > -30 || this.unSwipe) {
          if (this.currentX < -30) { this.unSwipe = false }
          this.touchBar.style.transform = `translateX(0px)`
          this.touchBar.style.webkitTransform = `translateX(0px)`
        } else {
          this.touchBar.style.transform = `translateX(-160px)`
          this.touchBar.style.webkitTransform = `translateX(-160px)`
          this.unSwipe = true
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .weui-cell__bd {
    color: rgb(0, 0, 0);
  }
  .vw-list__item {
    position: relative;
  }
  .vw-list-icon {
    width: 1.5em;
  }
  .vw-list-content {
    z-index: 2;
    background: #fff;
    &.in-transition {
      transition: all linear .2s;
    }
    &:active {
      background-color: #ECECEC;
    }
    &-badge {
      position: relative;
    }
  }
  .vw-buttons {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    max-width: 160px;
    button {
      padding: 0 20px;
      border: none;
      background: #E64340;
      color: #fff;
      outline: none;
      &:active {
        color: rgba(255, 255, 255, 0.6);
        background-color: #CE3C39;
      }
      &:first-child {
        background: #bbb;
        &:active {
          background-color: #aaa;
        }
      }
    }
  }
</style>