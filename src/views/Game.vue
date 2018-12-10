<template>
  <div class="game">
    <div class="row">
      <opponent class="col-12 justify-content-space between"></opponent>
    </div>
    <div class="row">
      <player class="col-12 justify-conetent-space between"></player>
    </div>
  </div>    
</template>



<script>
  import opponent from "@/components/opponent.vue"
  import player from "@/components/player.vue"
  export default {
    name:'',
    mounted() {
      this.$store.dispatch('getGame', this.$route.params.gameId)
    },
    components: {
      opponent, player
    },
    data() {
      return {

      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    }

  }
</script>



<style>

</style>
