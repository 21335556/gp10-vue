<template>
  <div>
    <ul>
      <li v-for="item in cartList" :key="item.id">
        {{ item.name }} / {{ item.quantity }}
      </li>
    </ul>
    <div v-if="cartList.length === 0">购物车空空如也.</div>
  </div>
</template>

<script>
export default {
  computed: {
    cartList() {
      return this.$store.getters['cart/getCartItems']
    }
  },
}
</script>