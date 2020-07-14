<template>
  <div class="container text-left">
    <div>
      <h1 class="p-4 text-center">Welcome to my Stock Trader Game</h1>
      <div class="card m-3">
        <h2 class="p-2 text-center">Rules</h2>
        <ul class="list-group">
          <li class="list-group-item">You have 100 days to amass as much cash as possible</li>
          <li class="list-group-item">You can check your current funds and what day number it is down below</li>
          <li class="list-group-item">Warning: refreshing or leaving the site will erase your progress, make sure to save!</li>
          <li class="list-group-item">You can save your current progress at any point, OBS: you only have one save file</li>
          <li class="list-group-item">You can load your save at any point if you feel you messed up</li>
          <li class="list-group-item">The algorithm for stock prices is crude and will be updated later</li>
          <li class="list-group-item">After 100 days your funds will become your score and will potentially be added to the Top 10, which are listed at the bottom of this page</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="card m-3 text-center">
        <h2 class="p-2">Trader Profile</h2>
        <p>Today is day {{this.$store.state.day}}</p>
        <p>Your funds is at ${{this.$store.state.player.cash}}</p>
      </div>
    </div>
    <div>
      <div class="card m-3 text-center">
        <h2 class="p-2">Top 10 Scores</h2>
        <ul class="list-group">
          <li class="list-group-item">No scores to show yet</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>/* eslint-disable */

</script>

<style scoped>

</style>
