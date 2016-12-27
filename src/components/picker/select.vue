<template>
  <select slot="label" class="weui-select" :name="name" v-model='selected'>
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ['value', 'name'],
  data () {
    return {
      selected: this.value
    }
  },
  watch: {
    value (newVal) {
      this.selected = newVal
    },
    selected (newVal) {
      this.$emit('on-change', newVal)
    }
  }
}
</script>