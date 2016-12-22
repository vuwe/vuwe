<template>
  <div class="multipicker-view">
    <p>{{ city }}</p>
    <VwButton plain id="picker-trigger">Multi picker</VwButton>

    <Picker picker-id="picker-trigger" :select-list="cityList" @change="selectCity"></Picker>
  </div>
</template>

<script>
const exg = [
  {
    value: 'Single',
    child: [],
    id: 0
  }, {
    value: 'Double',
    child: [
      {
        value: 'D-child-1'
      }, {
        value: 'D-child-2'
      }, {
        value: 'D-child-3'
      }
    ],
    id: 1
  }, {
    value: 'Treble',
    child: [
      {
        value: 'T-child-1',
        child: [{
          value: 'T1-grandChild-1'
        }, {
          value: 'T1-grandChild-2'
        }]
      }, {
        value: 'T-child-2',
        child: [{
          value: 'T2-grandChild-1'
        }, {
          value: 'T2-grandChild-2'
        }]
      }, {
        value: 'T-child-3',
        child: [{
          value: 'T3-grandChild-1'
        }, {
          value: 'T3-grandChild-2'
        }]
      }
    ],
    id: 2
  }
]

export default {
  data () {
    return {
      cityList: exg,
      city: 'None'
    }
  },
  methods: {
    selectCity (v) {
      this.city = v
    }
  }
}
</script>

<style>
  .multipicker-view {
    padding: 10px;
  }
</style>