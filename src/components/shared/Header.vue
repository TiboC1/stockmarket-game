<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <p class="navbar-brand nav-lol">Stock Market Sim</p>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link nav-lol" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link nav-lol" to="/market">Market</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link nav-lol" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-lol dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save/Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <button class="dropdown-item" @click="saveGame">Save</button>
            <button class="dropdown-item" @click="loadGame">Load</button>
          </div>
        </li>
        <li class="nav-item">
          <p class="navbar-brand nav-lol">Funds: ${{$store.state.player.cash}}</p>
        </li>
        <li class="nav-item nav-lol">
          <button class="btn btn-primary" @click="endDay">End Day</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>/* eslint-disable */
import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'endDay',
        'saveGame',
        'loadGame'
      ]),
    },
  }

</script>

<style scoped>
  .router-link-exact-active{
    color: #5f9ea0 !important;
  }
  .router-link-exact-active:hover{
    color: #1f73a0 !important;
  }
  .navbar-brand {
    padding: 0;
  }
  .navbar .nav-lol {
    padding-top: 0;
    padding-bottom: 0;
    height: 38px;
    line-height: 50px;
  }
</style>
