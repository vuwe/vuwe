<template>
  <div class="vw-scroller" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @scroll="scrollingWatcher">
    <div class="vw-scroller-tips" style="height: 0;">{{innerText}}</div>
    <div class="vw-scroller-content">
      <slot></slot>
    </div>
    <div class="vw-scroller-bottom" v-if="options.infiniteFun">{{options.bottomDesc || 'Load more'}}</div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      startY: 0,
      scrollTop: 0,
      deltaY: 0,
      innerText: this.options.baseText,
      config: {
        maxDistance: 80,
        minDistance: 50,
        duration: 1000,
        baseText: 'Pull down to refresh',
        releaseText: 'Release to refresh',
        loadingText: 'Refreshing...',
        infiniteText: 'Load more...',
        ...this.options
      }
    }
  },
  mounted () {
    if (this.options.infiniteFun) {
      const anchorBottom = this.$el.children[2]
      const parentBox = this.$el.parentNode
      this.$el.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
          if (anchorBottom.getBoundingClientRect().bottom === parentBox.getBoundingClientRect().bottom) {
            this.options.infiniteFun()
          }
        })
      })
    }
  },
  computed: {
    wrapper () {
      return this.$el
    },
    tips () {
      return this.$el.children[0]
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.touches[0].pageY + this.wrapper.scrollTop
      this.tips.classList.remove('release-transition')
    },
    touchMove (e) {
      if (this.scrollTop === 0) {
        this.deltaY = e.changedTouches[0].pageY - this.startY
        if (this.deltaY > 0) {
          e.preventDefault()
          if (this.deltaY < this.config.maxDistance) {
            this.tips.style.height = `${this.deltaY}px`
          }
          if (this.deltaY > this.config.minDistance) {
            this.innerText = this.config.releaseText
          } else {
            this.innerText = this.config.baseText
          }
        }
      }
    },
    touchEnd (e) {
      const reset = () => {
        this.tips.classList.add('release-transition')
        this.tips.style.height = 0
      }

      if (this.deltaY > this.config.minDistance) {
        this.tips.style.height = `${this.config.minDistance}px`
        this.innerText = this.config.loadingText

        const callback = this.config.pullDownFun()

        if (callback && typeof callback.then === 'function') {
          callback.then(() => {
            reset()
          })
        } else {
          setTimeout(() => {
            reset()
          }, this.config.duration)
        }
      } else {
        this.tips.style.height = 0
      }
      this.tips.classList.add('release-transition')
      return true
    },
    scrollingWatcher (e) {
      window.requestAnimationFrame(() => {
        this.scrollTop = e.target.scrollTop
      })
    }
  }
}
</script>

<style lang="less">
  .vw-scroller {
    background: #fff;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    &-tips {
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    .release-transition {
      transition: all ease .3s;
    }
    &-bottom {
      text-align: center;
      padding: 10px;
    }
  }
  .vw-scroller .items {
    padding: 10px 0;
  }
</style>