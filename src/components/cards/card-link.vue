<template>
  <a :href="link" class="card-link-wrapper">
    <div class="card-link-wrapper-title">{{title}}</div>
    <img class="card-link-wrapper-img" :src="img" alt="">
  </a>
</template>

<script>
export default {
  props: ['link', 'title', 'img']
}
</script>

<style lang="less">
  .card-link-wrapper {
    display: block;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
    &:active {
      background-color: #eaeaea;
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    &-title {
      float: left;
      width: 80%;
      color: #000;
    }
    &-img {
      float: right;
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
  }
</style>