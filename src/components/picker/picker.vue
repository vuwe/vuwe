<template>
  <div class="vw-multi-picker">
    <div id="targetContainer"></div>
  </div>
</template>

<script>
import { Multipicker } from './MultiPicker.js'
export default {
  props: ['pickerId', 'selectList'],
  data () {
    return {
      Multipicker: null
    }
  },
  mounted () {
    this.Multipicker = new Multipicker({
      input: this.pickerId,
      container: 'targetContainer',
      jsonData: this.selectList,
      success: (arr) => {
        this.$emit('change', JSON.stringify(arr))
      }
    })
  },
  destroyed () {
    this.Multipicker = null
  }
}
</script>

<style>
  @import './MultiPicker.css';
</style>