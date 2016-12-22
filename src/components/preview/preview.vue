<template>
  <div class="weui-form-preview">
    <div class="weui-form-preview__hd">
      <label class="weui-form-preview__label">{{previewObj.label}}</label>
      <em class="weui-form-preview__value">{{previewObj.value}}</em>
    </div>
    <div class="weui-form-preview__bd">
      <template v-for="item in previewObj.items">
        <div class="weui-form-preview__item">
          <label class="weui-form-preview__label">{{item.label}}</label>
          <span class="weui-form-preview__value">{{item.value}}</span>
        </div>
      </template>
    </div>
    <div class="weui-form-preview__ft">
      <a class="weui-form-preview__btn weui-form-preview__btn_default" @click="callbackFun(previewObj.assistCb)" v-if="previewObj.assistCbText">{{previewObj.assistCbText}}</a>
      <a class="weui-form-preview__btn weui-form-preview__btn_primary" @click="callbackFun(previewObj.cb)">{{previewObj.cbText}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previewObj: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    callbackFun (fn) {
      if (fn) {
        fn()
      }
    }
  }
}
</script>