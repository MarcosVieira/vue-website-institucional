<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      <li><a href="#/hello" target="_blank">Welcome</a></li>
      <li><a href="#/people" target="_blank">People</a></li>
      <li><a href="#/posts" target="_blank">Posts</a></li>
      <li><a href="#/postsaxios" target="_blank">Posts Axios</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Treinamento em Vue.js'
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
