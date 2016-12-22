<template>
  <div class="header-view">
    <div class="header-view-wrapper">
      <VwHeader title="Title-1">
        <router-link slot="left" to="/">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </router-link>
        <i class="fa fa-ellipsis-h" slot="right"></i>
      </VwHeader>
    </div>

    <div class="header-view-wrapper">
      <VwHeader title="Title-2">
        <router-link slot="left" to="/">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </router-link>
      </VwHeader>
    </div>

    <div class="header-view-wrapper">
      <VwHeader title="Title-3">
        <i class="fa fa-ellipsis-h" slot="right"></i>
      </VwHeader>
    </div>
  </div>
</template>

<style lang="less">
  .header-view {
    &-wrapper {
      position: relative;
      width: 100%;
      height: 40px;
      margin: 10px 0;
    }
  }
</style>