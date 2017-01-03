<template>
  <div class="tabs-view">
    <TabBar :tabs="tabItemList" @on-change="onChange"></TabBar>
    <div style="position: relative; top: 50px; padding: 0 10px;">
      <div>{{currentView}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabItemList: ['Tab-1', 'Tab-2', 'Tab-3'],
      currentView: 'tabView0'
    }
  },
  methods: {
    onChange (i) {
      this.currentView = `tabView${i}`
    }
  }
}
</script>

<style>
  .tabs-view {
    position: relative;
    height: 200px;
  }
</style>