<template>
  <span :class="[{'weui-badge_dot': value === 'dot'}, 'weui-badge']" :style="styleObj" v-show="value" @click="onItemClick">{{num}}</span>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'

export default {
  mixins: [childMixin],
  props: {
    value: {}
  },
  computed: {
    num () {
      return this.value > 99 ? '...' : (this.value === 'dot' ? '' : this.value)
    },
    styleObj () {
      if (this.value !== 'dot') {
        return {
          position: 'absolute',
          top: '-2px',
          right: '-13px'
        }
      } else {
        return {
          position: 'absolute',
          top: '0',
          right: '-6px'
        }
      }
    }
  }
}
</script>