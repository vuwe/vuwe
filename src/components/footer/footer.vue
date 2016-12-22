<template>
  <div class="weui-footer">
    <p class="weui-footer__links">
      <span class="weui-footer__link">
        <slot name="link"></slot>
      </span>
    </p>
    <p class="weui-footer__text">
      <slot name="text"></slot>
    </p>
  </div>
</template>

<style lang="less">
  .weui-footer__link {
    marin: 0;
    a {
      margin: 0 .62em;
      position: relative;
      &:before,
      &:first-child:after {
        display: none;
      }
      &:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid #C7C7C7;
        color: #C7C7C7;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
        left: -0.65em;
        top: .15em;
        bottom: .15em;
      }
    }
  }
</style>