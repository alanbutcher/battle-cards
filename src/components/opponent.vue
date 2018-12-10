<template>
    <div class="opponent row">
       <div class="col-3" v-for="hand in opponent">
        <div class="opponent" v-if="opponent">
          <!-- <img v-if="!opponent.visible" src="@/assets/cardBack2.png" class="cardBack">
          <img v-else="opponent.visible" :src="opponent.img"> -->
          </div>
        </div>
    </div>
</template>




<script>
  export default {
    name: 'opponent',
    data() {
      return {

      }
    },

    computed: {
      opponent() {
      return this.$store.state.game.opponent
    }
  }
}

</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

 
  .cardBack {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  max-height: 20vh;
  justify-content: space-between;
  max-height: 270px;
  border-radius: 5px;
  }
</style>