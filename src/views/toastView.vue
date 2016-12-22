<template>
  <div class="toast-view">
    <VwButton plain @click="showToast('Normal')">Normal</VwButton>
    <VwButton plain @click="showToast('Success')">Sucess</VwButton>
    <VwButton plain @click="showToast('Loading')">Loading</VwButton>
    <VwButton plain @click="showToast('Cus')">Custom Icon</VwButton>
  </div>
</template>

<script>
export default {
  methods: {
    showToast (t) {
      switch (t) {
        case 'Normal': {
          this.$toast(t)
          break
        }
        case 'Success': {
          this.$toast({
            content: t,
            success: true
          })
          break
        }
        case 'Loading': {
          this.$toast({
            content: t,
            loading: true
          })
          break
        }
        case 'Cus': {
          this.$toast({
            content: t,
            icon: 'fa fa-map'
          })
          break
        }
      }
    }
  }
}
</script>

<style>
  .toast-view {
    padding: 10px;
  }
</style>