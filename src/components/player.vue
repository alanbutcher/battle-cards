<template>
  <div v-if="gameId" class="player">
    <div class="row justify-content-around">
      <div v-for="cardplayer in player.hand">
            <h1>{{player.name}}</h1>
              <img :src="cardplayer.img" height="150">
                <h3>health: {{cardplayer.health}}</h3>
                <h3>attack: {{cardplayer.attack}}</h3>
                <h3>defense: {{cardplayer.defense}}</h3>
          </div>
    </div>
  </div>
</template>




<script>
export default {
  name: 'player',
  data() {
    return {}
  },

computed: {
  player() {
    return this.$store.state.game.player
  },
  gameId() {
    return this.$store.state.game.id
  }
}


}

</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 



</style>
