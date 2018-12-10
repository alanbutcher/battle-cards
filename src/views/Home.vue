<template>
  <div class="home container-fluid">
    <div class="row justify-content-around">
      <div class="col-5">
        <h1>Home Page</h1>
        <form @submit.prevent="startGame">
          <input type="text" v-model="gameConfig.playerName">
          <button type="submit">Start Game</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    data() {
      return {
          gameConfig: {
            playerName: "", //The player's name
            set: 0 // Card Images are generated base on game set 1-4
          }
      }
    },

    mounted() {

    },

    methods: {
      startGame(gameConfig) {
        this.$store.dispatch("startGame", this.gameConfig);
      }
    }



  }
</script>


<style>
</style>