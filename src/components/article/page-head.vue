<template>
  <div class="page__hd" @click='onItemClick'>
    <h1 class="page__title">{{ title }}</h1>
    <p class="page__desc">{{ desc }}</p>
  </div>
</template>

<script>
import { childMixin } from '../../mixins/mixins.js'

export default {
  mixins: [childMixin],
  props: ['title', 'desc']
}
</script>