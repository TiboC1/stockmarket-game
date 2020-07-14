<template>
  <div class="container">
    <h2 class="m-2">Market</h2>
    <div class="row">
      <app-stock class="col-sm-5 col-lg-3" :stock=stock v-for="(stock, index) in displayStock" :key="index"></app-stock>
    </div>
  </div>

</template>

<script>/* eslint-disable */
import {mapGetters} from 'vuex'
  import Stock from './Stock'
  export default {
    computed: {
      ...mapGetters([
        'displayStock'
      ]),
    },
    components: {
      'appStock': Stock,
    }
  }
</script>

<style scoped>

</style>

