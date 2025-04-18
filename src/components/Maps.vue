<script>
import Product from "@/components/Product.vue";
import products from "@/products.js";

export default {
  name: "Maps",
  components: {Product},
  data() {
    return {
      products: products
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <Product v-for="product in products"
             :title="product.title"/>
  </section>
</template>

<style scoped>

Product {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>