<template>
  <div>
    <h1>Contato</h1>
    <h2>{{ msg }}</h2>

    <md-card>
      <md-card-media>
        <img style="max-width: 400px; height: auto;" src="../assets/nos2.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Família feliz</div>
        <div class="md-subhead">Mexeu com um mexeu com todos !!!!</div>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-fab md-primary">
          <md-icon>thumb_up</md-icon>
        </md-button>
      </md-card-actions>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
      </md-card-content>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      msg: 'Endereço: SHIS QI 28 Conjunto 18 Casa 18'
    }
  }
}
</script>

<style>
</style>
