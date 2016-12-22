import Vue from 'vue'

import Page from './article/page.vue'
import PageHead from './article/page-head.vue'
import PageBody from './article/page-body.vue'
import PageFoot from './article/page-foot.vue'

import Badge from './badges/badge.vue'

import VwButton from './buttons/button.vue'

import CardHead from './cards/card-head.vue'
import CardLink from './cards/card-link.vue'
import Card from './cards/card.vue'

import Category from './category/category.vue'
import CategoryWrapper from './category/category-wrapper.vue'

import Cell from './cells/cell.vue'
import Agree from './cells/agree.vue'
import CellLink from './cells/cells-link.vue'
import CellTips from './cells/cells-tips.vue'

import CutOff from './cut_off/cut-off.vue'

import FlexItem from './flex/flex-item.vue'
import FlexWrapper from './flex/flex-wrapper.vue'

import VwFooter from './footer/footer.vue'

import AddonBtn from './forms/addon-btn.vue'
import AddonImg from './forms/addon-img.vue'
import Checkbox from './forms/checkbox.vue'
import VwInput from './forms/input.vue'
import Num from './forms/number.vue'
import Radio from './forms/radio.vue'
import Range from './forms/range.vue'
import VwSwitch from './forms/switch.vue'
import Textarea from './forms/textarea.vue'

import Gallary from './gallary/gallary.vue'

import VwHeader from './header/header.vue'

import Icon from './icons/icon.vue'
import IconBox from './icons/icons-box.vue'

import ListItem from './list/list-item.vue'

import NavItem from './nav/nav-item.vue'
import BottomNav from './nav/bottom-nav.vue'

import Panel from './panel/panel.vue'

import Password from './password/password.vue'

import Picker from './picker/picker.vue'
import Select from './picker/select.vue'

import ActionSheet from './popup/action-sheet.vue'
import Dialog from './popup/dialog.vue'
import Info from './popup/info.vue'
import Toast from './popup/toast.vue'

import Preview from './preview/preview.vue'

import VwProgress from './progress/progress.vue'

import Scroller from './scroller/scroller.vue'

import SearchBar from './search_bar/search-bar.vue'

import Step from './steps/step.vue'

import TabBar from './tab/tab-bar.vue'

import InfoFun from './popup/info'
import DialogFun from './popup/dialog'
import ToastFun from './popup/toast'

const Vuwe = {
  Page,
  PageHead,
  PageBody,
  PageFoot,
  Badge,
  VwButton,
  CardHead,
  CardLink,
  Card,
  Category,
  CategoryWrapper,
  Cell,
  Agree,
  CellLink,
  CellTips,
  CutOff,
  FlexItem,
  FlexWrapper,
  VwFooter,
  AddonBtn,
  AddonImg,
  Checkbox,
  VwInput,
  Num,
  Radio,
  Range,
  VwSwitch,
  Textarea,
  Gallary,
  VwHeader,
  Icon,
  IconBox,
  ListItem,
  NavItem,
  BottomNav,
  Panel,
  Password,
  Picker,
  Select,
  ActionSheet,
  Dialog,
  Info,
  Toast,
  Preview,
  VwProgress,
  Scroller,
  SearchBar,
  Step,
  TabBar
}

const install = function () {
  Object.keys(Vuwe).forEach((key) => {
    Vue.component(key, Vuwe[key])
  })

  Vue.prototype.$info = InfoFun
  Vue.prototype.$dialog = DialogFun
  Vue.prototype.$toast = ToastFun
}

export default Object.assign(Vuwe, { install })
