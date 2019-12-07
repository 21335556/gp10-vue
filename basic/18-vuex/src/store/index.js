import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment(state, payload) {
      state.count += payload
    }
  },

  actions: {
    increment({ commit }) {
      // setTimeout(() => {
      //   commit('increment', 2)
      // },1000)
      commit('increment', 1)
    }
  },

  getters: {
    count99(state){
      let mul = 1
      for(let i = 1; i <= state.count; i++) {
        mul *= i
      }
      return mul
    },
    count100(state, getters) {
      let sum = 0
      for(let i = 1; i <= state.count; i++) {
        sum += i
      }
      return sum + getters.count99
    },

    sum: state => num => {
      return num + 5
    }
  }
})

export default store