<template>
  <div class="product-list">
      <ul>
          <li v-for="product in products">
              {{product.title}} - {{product.price}}<br>
              <button :disabled="!product.inventory" @click="addToCart(product)"> Add to cart </button>
          </li>
      </ul>
  </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: mapGetters({
            products: 'allProducts'
        }),
        methods: mapActions([
          'addToCart'
        ]),
        created () {
          this.$store.dispatch('getAllProducts')
        }
    }
</script>

