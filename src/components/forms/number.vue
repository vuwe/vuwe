<template>
  <div class="vw-number">
    <a href="javascript:;" @click="subtract">-</a>
    <input type="number" :value="val" :max="max" :min="min" :step="steps">
    <a href="javascript:;" @click="add">+</a>
  </div>
</template>

<script>
export default {
  props: ['value', 'max', 'min', 'step'],
  data () {
    return {
      val: this.value || 0,
      steps: this.step || 1
    }
  },
  methods: {
    add () {
      this.val = Number(this.val) + Number(this.steps)
    },
    subtract () {
      this.val = Number(this.val) - Number(this.steps)
    }
  }
}
</script>

<style lang="less">
  .vw-number {
    background: #fff;
    border: 1px solid #ececec;
    height: 40px;
    display: flex;
    width: 180px;
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 20%;
      padding: 0 10px;
      font-size: 25px;
      color: #3cc51f;
      text-align: center;
    }
    input {
      vertical-align: top;
      height: 100%;
      width: 60%;
      font-size: 20px;
      color: #666;
      text-align: center;
      border: none;
      border-left: 1px solid #ececec;
      border-right: 1px solid #ececec;
    }
  }
</style>