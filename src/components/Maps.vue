<script>
import Product from "@/components/Product.vue";

export default {
  name: "Maps",
  components: {Product},
  data() {
    return {
      products: [
        {
          title: "Neverwinter Nights: EE"
        },
        {
          title: "Warcraft II"
        },
        {
          title: "Half-Life 2"
        },
        {
          title: "Warcraft III"
        }
      ]
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <Product v-for="product in products" :title="product.title"/>
  </section>
</template>

<style scoped>

Product {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>