<template>
  <div class="nav-view">
    <h3 class="nav-view-content">
      {{content}}
    </h3>
    <BottomNav class="tab-nav" value='0'>
      <NavItem value='0' title="tab 1" img="https://imgly.net/img/2gj.jpg" @click.native="onTab('AAA')"></NavItem>
      <NavItem value='1' title="tab 2" icon="fa fa-bank" info-num="10" @click.native="onTab('BBB')"></NavItem>
      <NavItem value='2' title="tab 3" icon="fa fa-birthday-cake" info-num="100" @click.native="onTab('CCC')"></NavItem>
      <NavItem value='3' title="tab 4" icon="fa fa-binoculars" info-num="dot" @click.native="onTab('DDD')"></NavItem>
    </BottomNav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: 'Nav view AAA'
    }
  },
  methods: {
    onTab (i) {
      this.content = `Nav view ${i}`
    }
  }
}
</script>

<style lang="less">
  .nav-view {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      bottom: 50px;
    }
  }
</style>