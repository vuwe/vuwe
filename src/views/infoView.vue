<template>
  <div class="info-view">
    <div class="info-view-btnbox">
      <VwButton origin @click="showOut()">Show info</VwButton>
      <VwButton primary @click="showOut('success')">Show info</VwButton>
      <VwButton warn @click="showOut('warn')">Show info</VwButton>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showOut (t = '') {
      this.$info({
        content: 'Oooops...Infomation!!!',
        type: t
      })
    }
  }
}
</script>

<style lang="less">
  .info-view {
    position: relative;
    &-btnbox {
      padding: 60px 10px;
    }
  }
</style>