<template>
  <div>
    {{ count100 }}
    <button @click="handleClick">+</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    handleClick() {
      this.$store.dispatch('increment')
    }
  },
  computed: mapGetters([
    'count100'
  ]),
}
</script>