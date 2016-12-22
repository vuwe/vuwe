import Vue from 'vue'
import vwToast from './toast.vue'

const Toast = Vue.extend(vwToast)

const pool = []

const getInstance = () => {
  if (pool.length > 0) {
    return pool.shift()
  }
  return new Toast({
    el: document.createElement('div')
  })
}

const returnInstance = (instance) => {
  if (instance) pool.push(instance)
}

export default function (options = {}) {
  const defaultOption = {
    success: false,
    loading: false,
    content: '',
    icon: '',
    duration: 2000
  }

  let { success, loading, content, icon, duration } = defaultOption

  if (typeof options === 'string') {
    content = options
  } else {
    ({ success, loading, content, icon, duration } = Object.assign(defaultOption, options))
  }

  const instance = getInstance()

  instance.success = success
  instance.loading = loading
  instance.content = content
  instance.icon = icon

  Vue.nextTick(() => {
    document.body.appendChild(instance.$el)
    instance.showIt = true
    if (duration > 0) {
      setTimeout(() => {
        instance.showIt = false
        setTimeout(() => {
          'remove' in window.Element.prototype ? instance.$el.remove() : instance.$el.parentNode.removeChild(instance.$el)
          returnInstance(instance)
          options.callback && options.callback()
        }, 300)
      }, duration)
    }
  })
}
