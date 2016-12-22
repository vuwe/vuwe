import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuwe from 'components/index'

Vue.use(Vuwe)

const FastClick = require('fastclick')
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  ...App
})
