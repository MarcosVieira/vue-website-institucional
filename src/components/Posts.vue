<template>
  <div class="posts">
    <md-table v-if="posts && posts.length">
      <md-table-header>
        <md-table-row>
          <md-table-head>
            Number
          </md-table-head>
          <md-table-head>
            Title
          </md-table-head>
          <md-table-head>
            Message
          </md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="(post,index) in posts" :key="index" >
          <md-table-cell>
            {{index + 1}}
          </md-table-cell>
          <md-table-cell align="justify">
            {{post.title}}
          </md-table-cell>
          <md-table-cell align="justify">
            {{post.body}}
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>

    <ul v-if="errors && errors.length">
      <li v-for="error in erros">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'posts',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    created () {
      // on-line: http://jsonplaceholder.typicode.com/posts
      // localhost: http://localhost:3000/posts
      axios.get('http://localhost:3000/posts')
        .then(response => {
          console.log(response.data)
          console.log(response.status)
          console.log(response.statusText)
          console.log(response.headers)
          console.log(response.config)
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
