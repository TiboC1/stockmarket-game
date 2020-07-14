<template>
  <div class="container">
    <h2> class="m-2">Portfolio</h2>
    <!-- if portfolio contains items -->
    <div class="row" v-if="checkIfEmpty">
      <app-stock class="col-sm-5 col-lg-3" :stock=stock v-for="(stock, index) in checkAmount" :key="index"></app-stock>
    </div>
    <!-- if portfolio is empty -->
    <div class="card p-2 mt-5" v-else>
      <p class="mt-2">Your Portfolio is empty right now.</p>
      <router-link class="btn btn-primary m-auto" to="/market">Buy stocks</router-link>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import { mapGetters } from 'vuex'
import Stock from './Stock'

  export default {
    computed: {
      ...mapGetters([
        'displayPortfolio'
      ]),
      // check to show portfolio objects where amount is not 0 as they do not get deleted even after selling all stocks of that type, can be used for a transaction history alter
      checkAmount() {
        return this.displayPortfolio.filter(item => item.amount > 0);
      },
      // check to see if portfolio is empty
      checkIfEmpty() {
        return this.checkAmount.length > 0;
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
