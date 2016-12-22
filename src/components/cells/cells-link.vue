<template>
  <a :href="link" class="weui-cell weui-cell_link" :disabled='disabled' @click='onItemClick'>
    <div class="weui-cell__bd">
      <slot></slot> 
    </div>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: ['link']
}
</script>