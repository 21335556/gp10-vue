import loadData from '../../api/'

let state = {
  all: []
}

let mutations = {
  setAllProducts(state, data) {
    state.all = data
  },

  reduceProductInventory(state, id) {
    let product = state.all.find(value => value.id === id)
    if(product.inventory > 0) {
      product.inventory--
    }
  }
}

let actions = {
  async getAllProducts({commit}) {
    let result = await loadData()
    commit('setAllProducts', result.products)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}