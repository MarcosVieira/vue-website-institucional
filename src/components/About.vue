<template>
  <div>
    <h1>Sobre</h1>
    <h2>{{ msg }}</h2>
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
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Sobre a aplicação exemplo'
    }
  }
}
</script>

<style>
</style>
