import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

Vue.use(Vuex)

const battleCardAPI = axios.create({
  baseURL: "https://battlecardz.herokuapp.com/api/games"
})

export default new Vuex.Store({
  state: {
    game: {},
    playerCard: [],
    opponentCard: []
  },

  mutations: {
    setGame(state, game) {
      state.game = game
      router.push({ name: 'game', params: { gameId: game.id } })
    },

    setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
    },

    setOpponentCard(state, opponentCard) {
      state.opponentCard = opponentCard
    }

  },

  actions: {
    
    getGame({ commit }, gameId) {
      battleCardAPI.get("/" + gameId)
        .then(res => {
        commit('setGame', res.data.data)
        })
        
    },
    
    startGame({ commit }, gameConfig) {
      battleCardAPI.post('', gameConfig)  
        .then(res => {
          
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
        .catch(error => {
          console.log("Start Game Error", error)
        })
    }, 
    
    attack({ commit }, payload) {
      battleCardAPI.put('/' + payload.id, payload.attack)
        .then(res => {
        commit('setGame', res.data.game)
      })
    }




  }

})
