export const state = () => {
  return {
    pageName: 'Nuxt Vuex',
    count: 0,
    movies: []
  }
}

export const mutations = {
  add(state, number) {
    state.count = state.count + number
  }
  loadMovies(state, movies) {
    state.movies = movie
  },
  delete(state, id) {
    state.movies = state.movies.fillter((value, index) => {
      return value.id != id
    })
  }
}

export const actions = {
  add(context, number) {
    context.commit('add', number)
  }
}