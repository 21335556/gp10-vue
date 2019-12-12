<template>
  <div>
    <h1 class="display-1 my-5">正在热映</h1>
    <div class="row justify-content-center">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="col-md-6"
      >
        <div class="card my-3">
          <nuxt-link :to="{ name: 'movies-id', params: { id: movie.id } }">
            <img
              :src="movie.img | wh('160.280')"
              :alt="movie.nm"
              class="card-img-top"
            >
            <div class="card-body">
              <h5 class="card-title">{{ movie.nm }}</h5>
              <h6 class="card-subtitle mb-2 text-black-50">{{ movie.star }}</h6>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullscreen',

  data() {
    return {
      title: '列表页'
    }
  },

  beforeCreate() {
    console.log('beforeCreate');
  },
  create() {
    console.log('create');
  },
  beforeMounted() {
    console.log('beforeMounted');
  },
  Mounted() {
    console.log('Mounted');
  },

  head() {
    return {
      title: this.title
    }
  },

  async asyncData({ $axios }) {
    let movies = $axios.$get('http://localhost:9000/movieList')
    return { 
      movies
    }
  },
  fillters: {
    wh(value,size) {
      return value.replace('w.h', value)
    }
  }
}
</script>