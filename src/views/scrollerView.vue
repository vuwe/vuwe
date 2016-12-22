<template>
  <div class="pull-view">
    <Scroller :options="pullOptions">
      <ListItem :title="'Item-' + (baseNum - i)" v-for="i in baseNum"></ListItem>
    </Scroller>
  </div>
</template>

<script>
export default {
  data () {
    const self = this
    return {
      baseNum: 31,
      pullOptions: {
        pullDownFun () {
          return new Promise((resolve) => {
            setTimeout(() => {
              self.baseNum += 5
              resolve()
            }, 1000)
          })
        },
        infiniteFun () {
          setTimeout(() => {
            self.baseNum += 5
          }, 1000)
        }
      }
    }
  }
}
</script>

<style>
  .pull-view {
    padding: 0;
    height: 300px;
  }
</style>