<script>
import products from "@/products.js"

export default {
  name: "ProductView",
  data() {
    return {
      product: products[this.$route.params.id],
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <h1>{{ product.title }}</h1>
  </section>
</template>

<style scoped>

.content-housing {
  text-align: center;
}

</style>