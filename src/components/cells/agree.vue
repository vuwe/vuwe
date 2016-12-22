<template>
  <label for="weuiAgree" class="weui-agree">
    <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" v-model='checked'>
    <span class="weui-agree__text">
      {{text}}<a :href="link">{{title}}</a>
    </span>
  </label>
</template>

<script>
export default {
  props: ['text', 'link', 'title'],
  data () {
    return {
      checked: false
    }
  },
  watch: {
    checked (newVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>