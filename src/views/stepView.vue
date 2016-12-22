<template>
  <div class="steps-view">
    <Step :steps="steps" :value="value"></Step>
    <div style="margin-top: 20px;">
      <VwButton primary @click="nextStep">Next</VwButton>
      <VwButton plain @click="reset">Reset</VwButton>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      steps: ['step-1', 'step-2', 'step-3'],
      value: 0
    }
  },
  methods: {
    nextStep () {
      this.value++
    },
    reset () {
      this.value = 0
    }
  }
}
</script>

<style>
  .steps-view {
    padding: 10px;
  }
</style>