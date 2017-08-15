<template>
  <div id="app">
    <img src="./assets/header_grass.png">
    <router-view></router-view>
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design com Vue.js
        </div>
        <div class="md-subhead">
          Com Marcos Vieira
        </div>
      </md-card-header>
      <md-card-content>
      </md-card-content>
    </md-card>
    <img src="./assets/footer_grass.png">
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
