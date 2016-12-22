<template>
  <img class="weui-vcode-img" :src="img">
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: ['img']
}
</script>