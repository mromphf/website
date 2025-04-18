<script>
import Card from "@/components/Card.vue";
import products from "@/products.js";

export default {
  name: "Maps",
  components: {Card},
  data() {
    return {
      products: products
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <Card v-for="product in Object.values(products)"
            :id="product.id"
            :title="product.title"
    />
  </section>
</template>

<style scoped>

.content-housing {
  max-height: none;
}

Card {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>