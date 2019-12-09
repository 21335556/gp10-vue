<template>
  <div class="container">
    <div class="tab-content" id="intheater-scroll">
      <div class="page h-not active">
        <div class="list-wrap">
          <MovieItem
           v-for="movie in movieList"
           :key="movie.id"
           :movie="movie"
           from="intheaters"
           >
           </MovieItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '@/components/movielist/MovieItem'
import resetState from '@/utils/reset-state'
// import http from "../../utils/http";
// import BScroll from 'better-scroll'
// import { Indicator, Toast } from 'mint-ui'
// import _ from 'lodash'
export default {
  components: {
    MovieItem
  },
  computed: {
    movieList() {
      return this.$store.state.data.movieList
    }
  },

  beforeRouteLeave(to, from, next) {
    resetState(to, this)
    next()
  },

  async mounted() {
    this.scroll({
      vm:this,
      container: '#intheater-scroll',
      params: {
        firstReq: {
          url:'/ajax/movieOnInfoList',
          params: {
            token: ''
          }
        },
        moreReq: {
          url:'/ajax/moreComingList',
          params: {
            token: ''
          }
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.container
  flex 1
  .tab-content
    height 100%
    over-flow hidden
    .page
      position static
</style>