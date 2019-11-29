<template>
  <Index />
</template>
  
<script>
import Index from './pages/Index'
export default {
  data() {
    return {
      msg: 'hello'
    }
  },

  components: {
    Index
  }
}
</script>

<style lang="stylus" scoped>
apply(props)
  props = arguments if length(arguments) > 1
  for prop in props
    {prop[0]} prop[1]

// div
//   apply(font-size 100px, color red)

</style>