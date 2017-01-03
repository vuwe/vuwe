<template>
  <div id="app">
    <div class="views">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <bottomNav class="tab-nav" :value='tabNav' v-if="showNav">
      <navItem value='#/' title="Intro" icon="fa fa-home" @click.native="onTab('/')"></navItem>
      <navItem value='#/demo' title="Demo" icon="fa fa-tree" @click.native="onTab('demo')"></navItem>
      <navItem value='#/coffee' title="Coffee" icon="fa fa-heart" @click.native="onTab('coffee')"></navItem>
      <navItem title="Doc" icon="fa fa-book" @click.native="onTab('doc')"></navItem>
    </bottomNav>
  </div>
</template>

<script>
import vwHeader from 'components/header/header.vue'
import bottomNav from 'components/nav/bottom-nav.vue'
import navItem from 'components/nav/nav-item.vue'

export default {
  data () {
    return {
      title: 'VUWE',
      backIcon: false,
      showNav: true
    }
  },
  computed: {
    tabNav () {
      return window.location.hash
    }
  },
  mounted () {
    this.backIcon = (window.location.hash !== '#/' && window.location.hash !== '#/intro')
    this.showNav = (window.top === window)
    console.log(`Within an iframe: ${!(window.top === window)}`)
  },
  watch: {
    $route (to, from) {
      this.title = to.name
      if (to.path !== '/' && to.path !== '/demo') {
        this.backIcon = true
      } else {
        this.backIcon = false
      }
    }
  },
  methods: {
    onTab (t) {
      if (t === 'doc') {
        window.open('https://vuwe.github.io/vuwe/doc.html')
      } else {
        this.$router.push(t)
      }
    }
  },
  components: {
    vwHeader,
    bottomNav,
    navItem
  }
}
</script>

<style lang="less">
@import './style/weui';
* {
  -webkit-overflow-scrolling: touch;
}
html,
body {
  font-family: Microsoft Yahei, "PingHei", "Helvetica Neue", "Helvetica", "STHeitiSC-Light", "Arial", sans-serif;
  background-color: #eee;
  height: 100%;
}
#app {
  height: 100%;
  .nav-bar {
    z-index: 21;
  }
  .views {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 50px;
    z-index: 20;
    overflow-x: hidden;
  }
}

</style>