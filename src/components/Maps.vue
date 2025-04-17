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
  <section>
    <Product v-for="product in products" :title="product.title"/>
  </section>
</template>

<style scoped>

section {
  border: 1px solid red;
  column-count: 1;
  column-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vh;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
}

Product {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

@media(min-width: 1366px) {
  section {
    column-count: 2;
    margin-top: 10vh;
    width: 90%;
  }
}

@media(min-width: 1920px) {
  section {
    width: 75%;
  }
}

@media(min-width: 2560px) {
  section {
    width: 60%;
  }
}

</style>