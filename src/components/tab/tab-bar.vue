<template>
  <div class="weui-navbar">
    <template v-for="(tab, i) in tabs">
      <div :class="[{'weui-bar__item_on': i === tabIndex}, 'weui-navbar__item']" @click="tabChange(i)">
        {{tab}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    index: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      tabIndex: Number(this.index)
    }
  },
  methods: {
    tabChange (i) {
      this.tabIndex = i
      this.$emit('change', i)
    }
  }
}
</script>