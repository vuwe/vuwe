<template>
  <div class="weui-cell">
    <div class="weui-cell__bd">
      <textarea class="weui-textarea" 
      :name="name" 
      :cols="cols" 
      :rows="rows"
      :autofocus="autofocus" 
      @click='onItemClick' 
      @input='onItemInput' 
      @change='onItemChange' 
      @focus='onItemFocus' 
      @blur='onItemBlur'></textarea>
      <div class="weui-textarea-counter">{{addon}}</div>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'

export default {
  mixins: [childMixin],
  props: {
    content: {},
    placeholder: {},
    cols: {},
    rows: {},
    name: {},
    addon: {},
    autofocus: {
      type: Boolean,
      default: false
    }
  }
}
</script>