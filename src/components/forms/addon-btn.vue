<template>
  <a href="javascript:;" class="weui-vcode-btn" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin]
}
</script>