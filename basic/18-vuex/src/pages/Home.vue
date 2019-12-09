<template>
  <div>
    <button @click="handleIncrementClick">+</button>
    {{ count100 }}
    {{ count }}
    <button @click="decrement(3)">-</button>
  </div>
</template>

<script>
import { mapGetters, mapState ,mapMutations } from 'vuex'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../store/action-types'
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from '../store/mutation-types'
export default {
  methods: {
    handleIncrementClick() {
      this.$store.dispatch(INCREMENT_ACTION)
    },
    ...mapMutations({
      decrement: DECREMENT_MUTATION
    })
  },
  computed: {
    ...mapGetters([
      'count100'
    ]),
    ...mapState(['count'])
  },
}
</script>