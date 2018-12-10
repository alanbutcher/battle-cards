<template>
  <div class="game">
    <div class="row">
      <opponent class="col-12 justify-content-space between"></opponent>
      <div v-for="hand in opponent">
        <!-- <img v-if="!hand.visible" src="@/assets/cardBack2.png">
        <img v-else="hand.visible" :src="hand.img"> -->

      </div>
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

    methods: {
      setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
      },

      setOpponentCard(state, opponentCard) {
      state.opponentCard = opponentCard
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
