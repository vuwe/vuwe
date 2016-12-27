<template>
  <input type="range" class="vw-range" :value="val" :min="minimum" :max="maximum" :step="step" @input="adjusting">
</template>

<script>
const counter = (el) => {
  let percent = Math.ceil(((el.value - el.min) / (el.max - el.min)) * 100)
  el.style.background = `-webkit-linear-gradient(left, #1AAD19 ${percent}%, #a9acb1 ${percent}%)`
}

export default {
  props: ['value', 'min', 'max', 'step'],
  data () {
    return {
      val: this.value || 0,
      minimum: this.min || 0,
      maximum: this.max || 100
    }
  },
  mounted () {
    let range = this.$el
    counter(range)
  },
  methods: {
    adjusting (e) {
      this.$emit('on-change', e.target.value)
      counter(this.$el)
    }
  }
}
</script>

<style lang="less">
  .vw-range {
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 2px;
    border: none;
    border-radius: 3px;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      border-radius: 100%;
      cursor: move;
      height: 30px;
      width: 30px;
      margin-top: -2px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    }
    &:focus {
      outline: none;
    }
  }
</style>