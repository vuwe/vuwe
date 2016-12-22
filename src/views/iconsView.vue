<template>
  <div class="icons-view">
    <CellTips>Icon Box</CellTips>
    <IconBox class="flex" success title="success" desc="For success"></IconBox>
    <IconBox class="flex" info title="info" desc="For normal info"></IconBox>
    <IconBox class="flex" warn title="warn" desc="For warn info"></IconBox>
    <IconBox class="flex" danger title="danger" desc="For danger info"></IconBox>
    <IconBox class="flex" waiting title="waiting" desc="For waiting info"></IconBox>

    <CellTips>Icons</CellTips>
    <Icon success></Icon>
    <Icon nike></Icon>
    <Icon circle></Icon>
    <Icon warn></Icon>
    <Icon download></Icon>
    <Icon info></Icon>
    <Icon cancel></Icon>
    <Icon search></Icon>
    <Icon loading></Icon>
  </div>
</template>

<style lang="less">
  .icons-view {
    padding: 0 10px;
  }
  .flex {
    display: flex;
    margin-bottom: 10px;
    div {
      margin-left: 20px;
    }
  }
</style>