<template>
  <div>
    <div class="card p-2 mt-2">
      <h5 class="card-title">{{ stock.name }}</h5>
      <p class="card-text">Buy Price: ${{ stock.price }}</p>
      <label :for="stock.name">Amount to buy:</label>
      <input :id="stock.name" class="m-2 form-number text-center" type="text" v-model.number="amount" min="0" max="1000" step="1">
      <p>projected cost: ${{stock.price * this.amount}}</p>
      <button class="btn btn-primary m-auto" @click="buyHandler({id: stock.id, name: stock.name, price: stock.price, amount: amount})">Buy</button>
    </div>

  </div>
</template>

<script>/* eslint-disable */
import {mapActions} from 'vuex'

  export default {
    props: ['stock'],
    data() {
      return {
        amount: 0
      }
    },
    methods: {
      ...mapActions([
        'buyStocks',
      ]),
      // function to reset amount in input field to 0
      resetAmount() {
        this.amount = 0
      },
      // function to handle both buystocks and reset amount functions
      buyHandler(payload) {
        //check to avoid buying negative amount of stocks
        if (this.amount < 0){
          return false
        } else {
          //check to prevent buying more stocks than cash available
          if (this.amount * this.stock.price > this.$store.state.player.cash){
            return false
          } else {
            this.buyStocks(payload);
            this.resetAmount();
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
