<template>
  <div class="weui-gallery" style="display: block">
    <span class="weui-gallery__img" v-bind:style="styleObject" @click='clickLayer'></span>
    <div class="weui-gallery__opr">
      <a href="javascript:" class="weui-gallery__del" @click="deleteThis">
        <i class="weui-icon-delete weui-icon_gallery-delete"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: ['img'],
  data () {
    return {
      styleObject: {
        backgroundImage: `url(${this.img})`
      }
    }
  },
  methods: {
    deleteThis (e) {
      this.$emit('delete', e)
    },
    clickLayer (e) {
      this.$emit('mask', e)
    }
  }
}
</script>