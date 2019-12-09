export default {
  namespaced: true,

  // item: [id, quantity]
  state: {
    item: []
  },

  getters: {
    getCartItems(state, getters, rootState) {
      // return {
      //   name: '小米',
      //   quantity: 9
      // }
      return state.item.map(cart => {
        let product = rootState.products.all.find(product => cart.id === product.id)
        return {
          name: product.name,
          quantity: cart.quantity
        }
      })
    }
  },

  mutations: {
    putProductToCart(state, id) {
      let product = state.item.find(value => {
        return value.id == id
      })
 
      if(product) {
        product.quantity++
      } else {
        state.item.push({
          id,
          quantity: 1
        })
      }
    },

    // actions: {

    // }
  }
}