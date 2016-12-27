<template>
  <div class="preview-view">
    <Preview :preview-obj='previewObj'></Preview>
  </div>
</template>

<script>
export default {
  data () {
    return {
      previewObj: {
        label: 'Cost',
        value: '$280.00',
        items: [
          {
            label: 'Apple',
            value: '$140.00'
          },
          {
            label: 'Pen',
            value: '$140.00'
          }
        ],
        assistCbText: 'Ugh',
        cbText: 'PPAP',
        assistCb () {
          console.log('Ugh!')
        },
        cb () {
          console.log('PPAP!')
        }
      }
    }
  }
}
</script>

<style>
  .preview-view {
    padding: 10px;
  }
</style>