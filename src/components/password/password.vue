<template>
  <div class="vw-password" @click="onFocus">
    <div class="vw-password-wrapper">
      <div class="vw-password-wrapper-item" :class="{'content': password.length > i - 1}" v-for="i in len"></div>
    </div>
    <input class="vw-password-input" type="password" :autofocus="autofocus" v-model="password" @input="onInput">
  </div>
</template>

<script>
export default {
  props: {
    length: {},
    value: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      password: this.value
    }
  },
  computed: {
    len () {
      return Number(this.length)
    },
    childLen () {
      return this.$el.childNodes.length - 1
    }
  },
  mounted () {
    if (this.autofocus) {
      this.onFocus()
    }
  },
  methods: {
    onFocus () {
      this.$el.childNodes[this.childLen].focus()
    },
    onInput () {
      if (this.password.length === this.len) {
        this.$emit('change', this.password)
      }
    }
  }
}
</script>

<style lang="less">
  .vw-password {
    &-wrapper {
      display: flex;
      justify-content: center;
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        background: #fff;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        font-size: 20px;
        &:first-child {
          border-left: 1px solid #ccc;
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
        }
        &.content {
          &:after {
            content: '';
            display: block;
            height: 15px;
            width: 15px;
            border-radius: 15px;
            background: #000;
          }
        }
      }
    }
    &-input {
      margin-left: -999em;
      opacity: 0;
    }
  }
</style>