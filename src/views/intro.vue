<template>
  <div class="intro-view">
    <div class="intro-view-content">
      <div class="intro-view-content-logo">
        <img src="static/img/logo.png" alt="">
      </div>
      <h3>VUWE</h3>
      <h4>WeUI for VueJS2.0</h4>
      <div class="intro-view-content-QR">
        <img src="static/img/QR.png" alt="">
        <p>Scan QR code to see demo</p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .intro-view {
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-content {
      &-logo {
        width: 120px;
        height: 120px;
        overflow: hidden;
        margin: 0 auto;
        img {
          object-fit: contain;
          max-width: 100%;
          max-height: 100%;
        }
      }
      h3,
      h4 {
        text-align: center;
      }
      &-QR {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
</style>