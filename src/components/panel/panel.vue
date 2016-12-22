<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">{{title}}</div>
    <div class="weui-panel__bd">
      <template v-for="item in linkObj" v-if="!titleOnly">
        <a :href="item.link" class="weui-media-box weui-media-box_appmsg" @click="callbackFun(item.fun)">
          <div class="weui-media-box__hd" v-if="item.img">
            <img class="weui-media-box__thumb" :src="item.img" alt="">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{item.title}}</h4>
            <p class="weui-media-box__desc">{{item.desc}}</p>
            <ul class="weui-media-box__info" v-if="item.info">
              <li class="weui-media-box__info__meta">{{item.info.source}}</li>
              <li class="weui-media-box__info__meta">{{item.info.time}}</li>
              <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.info.extra}}</li>
            </ul>
          </div>
        </a>
      </template>

      <vw-cells v-if="titleOnly">
        <template v-for="item in linkObj">
          <vw-list-item :title="item.title" :src="item.img" :href="item.link"></vw-list-item>
        </template>
      </vw-cells>
    </div>
    <div class="weui-panel__ft">
      <a :href="moreLink" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">{{moreInfo}}</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
import vwCells from '../cells/cell.vue'
import vwListItem from '../list/list-item.vue'
export default {
  mixins: [childMixin],
  props: {
    title: {
      type: String
    },
    linkObj: {
      type: Array,
      default: () => []
    },
    moreInfo: {
      type: String
    },
    moreLink: {
      type: String,
      default: 'javascript:void(0);'
    },
    titleOnly: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    callbackFun (fun) {
      if (fun) {
        fun()
      }
    }
  },
  components: {
    vwCells,
    vwListItem
  }
}
</script>

<style lang="less" scroped>
  .weui-cells {
    margin-top: 0;
    &:before,
    &:after {
      display: none;
    }
    p {
      margin-bottom: 0;
    }
  }
</style>