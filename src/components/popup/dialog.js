import Vue from 'vue'
import vwDialog from './dialog.vue'

const Dialog = Vue.extend(vwDialog)

export default function (options = {}) {
  const defaultOption = {
    android: false,
    dialogObj: {
      title: 'Title',
      content: 'Content...',
      assistBtn: 'Assist Button',
      mainBtn: 'Main button',
      assistFn () { console.log('Assist Button') },
      mainFn () { console.log('Main Button') }
    }
  }

  let { android, dialogObj } = Object.assign(defaultOption, options)

  const instance = new Dialog({
    el: document.createElement('div')
  })

  instance.android = android
  instance.dialogObj = dialogObj

  Vue.nextTick(() => {
    document.body.appendChild(instance.$el)
    instance.showIt = true
  })
}
