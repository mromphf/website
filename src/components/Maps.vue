<script>
import Card from "@/components/Card.vue";
import Masthead from "@/components/Masthead.vue";
import products from "@/data/products.js";

let filtered = Object.values(products)
    .filter(p => p.id !== 'fiction' && p.id !== 'blog');

export default {
  name: "Maps",
  components: {Card, Masthead},
  data() {
    return {
      products: filtered
    }
  }
}
</script>

<template>
  <Masthead />

  <section class="content-housing">
    <Card v-for="product in products"
            :id="product.id"
            :title="product.title"
    />
  </section>
</template>

<style scoped>

Card {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>