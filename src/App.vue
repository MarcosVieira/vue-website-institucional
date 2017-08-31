<template>
  <div id="app">
    <img src="./assets/header_grass.png">
    <router-view></router-view>
    <img src="./assets/footer_grass.png">
  </div>
</template>

<script>
  import MdCardHeader from '../node_modules/vue-material/src/components/mdCard/mdCardHeader'
  import MdCardContent from '../node_modules/vue-material/src/components/mdCard/mdCardContent'
  export default {
    name: 'app',
    components: {
      MdCardContent,
      MdCardHeader}
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
