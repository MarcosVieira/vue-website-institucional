<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="#/contato" target="_blank">Contato</a></li>
      <li><a href="#/sobre" target="_blank">Sobre</a></li>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Bem vindo à sua aplicação Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
