<template>
  <a :href="href" class="vw-card-head-link">
    <div class="vw-card-head-link-wrapper">
      <img class="vw-card-head-link-wrapper-img" :src="img" alt="">
      <div class="vw-card-head-link-wrapper-title">{{title}}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['href', 'title', 'img']
}
</script>

<style lang="less">
  .vw-card-head-link {
    display: block;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    &-wrapper {
      height: 200px;
      position: relative;
      &-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      &-title {
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, .6);
        width: 100%;
        height: 55px;
        padding: 5px;
        color: #fff;
      }
    }
  }
</style>