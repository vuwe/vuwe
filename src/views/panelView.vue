<template>
  <div class="panel-view">
    <CellTips>普通panel</CellTips>
    <Panel :linkObj="linkObjs" title="Panel 1" more-info="show more" more-link="#"></Panel>

    <CellTips>仅带标题</CellTips>
    <Panel title-only :linkObj="linkObjs" title="Panel 1" more-info="show more" more-link="#"></Panel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkObjs: [
        {
          link: '#title-1',
          title: 'Title 1',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          info: {
            source: 'baidu.com',
            time: '2016-11-11',
            extra: '抄的'
          }
        },
        {
          link: '#title-2',
          title: 'Title 2',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          img: 'https://imgly.net/img/2gj.jpg'
        }
      ]
    }
  }
}
</script>

<style>
  .panel-view {
    padding: 0 10px;
  }
</style>