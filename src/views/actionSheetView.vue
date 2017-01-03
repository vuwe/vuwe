<template>
  <div class="action-sheet-view">
    <VwButton plain @click.native="actionSheet('iOS')">iOS</VwButton>
    <VwButton plain @click.native="actionSheet('noCancel')">No cancel</VwButton>
    <VwButton plain @click.native="actionSheet('Android')">Android</VwButton>

    <ActionSheet :show-it="iOS" @hide="hidePopup">
      <div>选项1</div>
      <div>选项2</div>
      <div>选项3</div>
    </ActionSheet>

    <ActionSheet :show-it="noCancel" no-cancel @hide="hidePopup">
      <div>选项1</div>
      <div>选项2</div>
      <div>选项3</div>
    </ActionSheet>
    
    <ActionSheet android :show-it="Android" @hide="hidePopup">
      <div>选项1</div>
      <div>选项2</div>
      <div>选项3</div>
    </ActionSheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iOS: false,
      Android: false,
      noCancel: false
    }
  },
  methods: {
    actionSheetIOS () {
      this.iOS = true
    },
    actionSheetAndroid () {
      this.Android = true
    },
    actionSheet (t) {
      this[t] = true
    },
    hidePopup () {
      this.iOS = this.noCancel = this.Android = false
    }
  }
}
</script>

<style>
  .action-sheet-view {
    padding: 10px;
  }
</style>