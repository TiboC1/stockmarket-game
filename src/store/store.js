import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // array of available stocks in market
    stocks: [
      {
        id: 0,
        name: 'Volkswagen',
        price: 120
      },
      {
        id: 1,
        name: 'Apple',
        price: 70
      },
      {
        id: 2,
        name: 'Microsoft',
        price: 100
      },
      {
        id: 3,
        name: 'Disney',
        price: 160
      },
      {
        id: 4,
        name: 'Amazon',
        price: 25
      },
      {
        id: 5,
        name: 'Shell',
        price: 60
      },
      {
        id: 6,
        name: 'Ebay',
        price: 40
      },
      {
        id: 7,
        name: 'Dell',
        price: 125
      },
      {
        id: 8,
        name: 'Uniweb',
        price: 90
      },
      {
        id: 9,
        name: 'Asus',
        price: 190
      },
      {
        id: 10,
        name: 'Benq',
        price: 10
      },
      {
        id: 11,
        name: 'American Eagle',
        price: 170
      },
      {
        id: 12,
        name: 'KBC',
        price: 120
      },
      {
        id: 13,
        name: 'Delhaize',
        price: 100
      },
    ],
    // default player profile
    player: {
      cash: 10000,
      portfolio: []
    },
    // start day of game
    day: 0
  },
  getters: {
    // getter to get array of stocks
    displayStock: state => {
      return state.stocks
    },
    // getter to get array of owned stocks in portfolio
    displayPortfolio: state => {
      return state.player.portfolio
    },
  },
  mutations: {
    // function to let player buy stocks
    buyStocks: (state, payload) => {
      // check to see if player already owns x amount of that stock, default is false
      let alreadyAdded = false
      // if player portfolio is empty, add object to portfolio array
      if(state.player.portfolio.length === 0){
        state.player.portfolio.push(payload);
      } else {
        state.player.portfolio.forEach(el => {
          // if alreadyAdded is true then add amount to existing object of that type of stock
          if (el.id === payload.id) {
            el.amount += parseInt(payload.amount)
            alreadyAdded = true
          }
        })
        // if false then add new object to portfolio array
        if(!alreadyAdded) {
          state.player.portfolio.push(payload);
        }
      }
      // subtract price of stocks bought from player available cash
      state.player.cash -= parseInt(payload.price) * parseInt(payload.amount);
    },

    // function to let player sell stocks
    sellStocks: (state, payload) => {
      // add total price of sold stocks to player available cash
      state.player.cash += (payload.price * payload.amount);
      // subtract correct amount from correct object in portfolio array, NOTE Object does not get deleted, can maybe later add transaction history because of this
      let index = state.player.portfolio.findIndex(item => item.id === payload.id);
      state.player.portfolio[index].amount -= payload.amount;
    },
    // function to end the day
    endDay: state => {
      state.stocks.forEach(el => {
        // primitive algorithm to change prices of stocks in market, NOTE there is no logic behind this, should be fixed later
        el.price = Math.floor(Math.random() * 200 + 5);
      });
      // add one to day number
      state.day += parseInt(1)
    },
    // function to save player profile to browsers local storage, used instead of connecting to a database
    saveGame: state => {
      localStorage.cash = state.player.cash
      localStorage.setItem("state.player.portfolio", JSON.stringify(state.player.portfolio));
      localStorage.day = state.day
    },
    // function to load player profile from browsers local storage
    loadGame: state => {
      if(confirm('Are you sure you wish to load a previous save')){
        if(localStorage.cash){
          state.player.cash = localStorage.cash
          state.player.portfolio = JSON.parse(localStorage.getItem("state.player.portfolio") || "[]");
          state.day = localStorage.day
        }
      }
    }
  },
  actions: {
    buyStocks: (context, payload) => {
      context.commit('buyStocks', payload);
    },
    sellStocks: (context, payload) => {
      context.commit('sellStocks', payload);
    },
    endDay: context => {
      context.commit('endDay');
    },
    saveGame: context => {
      context.commit('saveGame');
    },
    loadGame: context => {
      context.commit('loadGame');
    }
  }
})
