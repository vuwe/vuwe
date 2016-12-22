<template>
  <div class="password-view">
    <p>请输入密码</p>
    <Password length="6" :value="value" autofocus @change="onSet"></Password>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSet (v) {
      console.log(v)
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
    margin: 20px;
  }
</style>