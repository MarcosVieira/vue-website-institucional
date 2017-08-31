<template>
  <div class="people">
    <md-card>
      <md-card-header>
        <div class="md-title">
          Material Design com Vue.js 2
        </div>
        <div class="md-subhead">
          Com Marcos Vieira no Youtube, Twitter e no cinema mais próximo da sua casa.
        </div>
      </md-card-header>
      <md-card-content>
        <md-button class="md-raised md-primary" @click="fillTable()">
          Preencher Tabela
        </md-button>

        <md-button class="md-raised md-primary" v-on:click="resetTable()">
          Limpar Tabela
        </md-button>
      </md-card-content>

      <md-table>
        <md-table-header>
          <md-table-row>
            <md-table-head>
              Nome
            </md-table-head>
            <md-table-head>
              Sobrenome
            </md-table-head>
            <md-table-head>
              email
            </md-table-head>
          </md-table-row>
        </md-table-header>
        <md-table-body>
          <md-table-row v-for="contato in contatos" :key="contato.id" >
            <md-table-cell>
              {{ contato.nome }}
            </md-table-cell>
            <md-table-cell>
              {{ contato.sobrenome }}
            </md-table-cell>
            <md-table-cell>
              {{ contato.email }}
            </md-table-cell>
          </md-table-row>
        </md-table-body>
      </md-table>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'people',
    data () {
      return {
        contatos: []
      }
    },
    methods: {
      fillTable () {
        this.contatos.push({id: 1, nome: 'Marcos', sobrenome: 'Vieira', email: 'marcoshv1964@gmail.com'})
        this.contatos.push({id: 2, nome: 'Ana Patrícia', sobrenome: 'Brito', email: 'anapatricia.b@gmail.com'})
        this.contatos.push({id: 3, nome: 'Bernardo', sobrenome: 'Vieira', email: 'bernardomsv@gmail.com'})
      },
      resetTable () {
        this.contatos.splice(0, this.contatos.length)
      }
    },
    mounted () {
      this.fillTable()
    }
  }
</script>
