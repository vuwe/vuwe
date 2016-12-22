import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main.vue'
import Coffee from './views/coffee.vue'
import Intro from './views/intro.vue'
import buttonView from './views/buttonView.vue'
import formView from './views/formView.vue'
import listView from './views/listView.vue'
import panelView from './views/panelView.vue'
import previewView from './views/previewView.vue'
import cardsView from './views/cardsView.vue'
import iconsView from './views/iconsView.vue'
import headerView from './views/headerView.vue'
import footersView from './views/footersView.vue'
import cutOffView from './views/cutOffView.vue'
import progressView from './views/progressView.vue'
import actionSheetView from './views/actionSheetView.vue'
import dialogView from './views/dialogView.vue'
import toastView from './views/toastView.vue'
import multiPickerView from './views/multiPickerView.vue'
import categoryView from './views/categoryView.vue'
import searchView from './views/searchView.vue'
import passwordView from './views/passwordView.vue'
import tabsView from './views/tabsView.vue'
import stepView from './views/stepView.vue'
import infoView from './views/infoView.vue'
import scrollerView from './views/scrollerView.vue'
import navView from './views/navView.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'VUWE', component: Intro },
    { path: '/demo', name: 'Demo', component: Main },
    { path: '/coffee', name: 'Bought me a cup of coffee', component: Coffee },
    { path: '/button', name: 'Button', component: buttonView },
    { path: '/form', name: 'Form', component: formView },
    { path: '/list', name: 'List', component: listView },
    { path: '/panel', name: 'Panel', component: panelView },
    { path: '/preview', name: 'Preview', component: previewView },
    { path: '/card', name: 'Card', component: cardsView },
    { path: '/icon', name: 'Icon', component: iconsView },
    { path: '/header', name: 'Header', component: headerView },
    { path: '/footer', name: 'Footer', component: footersView },
    { path: '/cut-off', name: 'Cut-off', component: cutOffView },
    { path: '/progress', name: 'Progress', component: progressView },
    { path: '/action-sheet', name: 'Action-sheet', component: actionSheetView },
    { path: '/dialog', name: 'Dialog', component: dialogView },
    { path: '/toast', name: 'Toast', component: toastView },
    { path: '/multi-picker', name: 'Multi-picker', component: multiPickerView },
    { path: '/category', name: 'Category', component: categoryView },
    { path: '/search', name: 'Search', component: searchView },
    { path: '/password', name: 'Password', component: passwordView },
    { path: '/navs', name: 'Nav', component: navView },
    { path: '/tabs', name: 'Tab', component: tabsView },
    { path: '/step', name: 'Step', component: stepView },
    { path: '/info', name: 'Info', component: infoView },
    { path: '/scroller', name: 'Scroller', component: scrollerView }
  ]
})

export default router
