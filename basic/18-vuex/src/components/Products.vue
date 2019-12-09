<template>
  <div>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id"
      >
        {{product.name}} / {{ product.price | yuan }}
        <button @click="putProductToCart(product.id)">放入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  filters: {
    yuan(value) {
      return '￥' + value
    }
  },
  
  computed: {
    products() {
      return this.$store.state.products.all
    }
  },

  methods: {
    ...mapMutations({
      putProductToCart: 'cart/putProductToCart',
    })
  },
}
</script>
