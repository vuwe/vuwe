<template>
  <div>
    <div class="weui-search-bar" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="text" class="weui-search-bar__input" v-model="content" @click="focusing" @input="onInput" @change="onInput" @keyup.enter.prevent="submit">
          <a href="javascript:" class="weui-icon-clear" @click="clear"></a>
        </div>
        <label class="weui-search-bar__label" @click="focusing" v-show="!focus">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" style="display:block;" @click="cancel" v-show="focus">取消</a>
    </div>

    <div class="weui-cells searchbar-result" v-show="focus">
      <template v-for="result in resultList">
        <div class="weui-cell weui-cell_access" @click="selectIt(result)">
          <div class="weui-cell__bd weui-cell_primary">
            <p>{{result}}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'
export default {
  mixins: [childMixin],
  props: {
    resultList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      focus: false,
      content: ''
    }
  },
  methods: {
    focusing (e) {
      this.focus = true
      document.querySelector('.weui-search-bar__input').focus()
      this.$emit('click', e)
    },
    cancel () {
      this.content = ''
      this.focus = false
    },
    clear () {
      this.content = ''
      document.querySelector('.weui-search-bar__input').focus()
    },
    onInput () {
      this.$emit('input', this.content)
    },
    submit () {
      this.$emit('search', this.content)
      setTimeout(() => {
        this.focus = false
        this.content = ''
      }, 300)
    },
    selectIt (v) {
      this.content = v
      this.$emit('search', this.content)
      setTimeout(() => {
        this.focus = false
        this.content = ''
      }, 300)
    }
  }
}
</script>