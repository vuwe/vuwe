<template>
  <div class="progress-view">
    <template v-for="i in 4">
      <VwProgress :value="value[i - 1]" @click.native="resetVal"></VwProgress>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ['10', '30', '50', '70'],
      reset: false
    }
  },
  methods: {
    resetVal () {
      if (!this.reset) {
        this.value = ['0', '0', '0', '0']
        this.reset = true
      } else {
        this.value = ['70', '50', '30', '10']
        this.reset = false
      }
    }
  }
}
</script>

<style>
  .progress-view {
    padding: 10px;
    background: #fff;
  }
</style>