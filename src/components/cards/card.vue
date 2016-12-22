<template>
  <div class="vw-card">
    <div class="vw-card-head">
      <slot name="head"></slot>
    </div>
    <div class="vw-card-links">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<style lang="less">
  .vw-card {
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    &-head,
    &-links .card-link-wrapper {
      border-bottom: 1px solid #d9d9d9;
      &:last-child {
        border: none;
      }
    }
  }
</style>