<template>
  <div class="dialog-view">
    <VwButton plain @click="dialog('iOS')">iOS</VwButton>
    <VwButton plain @click="dialog('Android')">Android</VwButton>

    <VwButton plain @click="dialog('iOS2')">iOS with 2 buttons</VwButton>
    <VwButton plain @click="dialog('Android2')">Android with 2 buttons</VwButton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iOS: false,
      Android: false,
      iOS2: false,
      Android2: false,
      iOS3: false,
      Android3: false,
      dialogObj: {
        title: 'PPAP',
        content: 'I have a pen, I have an apple. Ugh! Apple pen!',
        assistBtn: '',
        mainBtn: 'Ugh!',
        mainFn () {
          console.log('Ugh~!')
        }
      },
      dialogObj2: {
        title: 'BANANA',
        content: 'Banana baaaaaa nananana!!',
        assistBtn: 'Apple',
        mainBtn: 'Banana',
        mainFn () {
          console.log('Banana!')
        },
        assistFn () {
          console.log('Apple...')
        }
      }
    }
  },
  methods: {
    dialog (d) {
      switch (d) {
        case 'iOS': {
          const dialogObj = this.dialogObj
          this.$dialog({ dialogObj })
          break
        }
        case 'Android': {
          this.$dialog({
            android: true,
            dialogObj: this.dialogObj
          })
          break
        }
        case 'iOS2': {
          const dialogObj = this.dialogObj2
          this.$dialog({ dialogObj })
          break
        }
        case 'Android2': {
          this.$dialog({
            android: true,
            dialogObj: this.dialogObj2
          })
          break
        }
      }
    },
    hidePopup () {
      this.iOS = this.Android = this.iOS2 = this.Android2 = this.iOS3 = this.Android3 = false
    },
    btnClick () {
      console.log('Hello')
    }
  }
}
</script>

<style lang="less">
  .dialog-view {
    padding: 10px;
  }
  .inside-form {
    margin: 5px 0;
    &-item {
      display: inline-block;
    }
    &-item__input {
      box-sizing: border-box;
      height: 30px;
      padding: 5px;
      width: 60%;
    }
    &-item__btn {
      vertical-align: top;
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
    }
  }
</style>