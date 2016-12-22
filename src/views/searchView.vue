<template>
  <div class="search-view">
    <SearchBar :result-list="resultList" @search="searchIt" @input="onInput"></SearchBar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resultList: []
    }
  },
  methods: {
    searchIt (v) {
      console.log(v)
    },
    onInput (v) {
      if (v) {
        this.resultList[0] = v + '111'
        this.resultList[1] = v + '222222'
        this.resultList[2] = v + '33333333333'
      } else {
        this.resultList = []
      }
    }
  }
}
</script>