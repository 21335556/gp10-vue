let state = {
  all: []
}

let mutations = {
  getAllProduts(state) {
    state.all = ['apple', 'orange']
  }
}

let actions = {}

let getters = {}

export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}