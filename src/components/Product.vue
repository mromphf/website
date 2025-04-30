<script>
import products from "@/data/products.js"
import titles from "@/data/titles.js"
import Masthead from "@/components/Masthead.vue"


export default {
  name: "ProductView",
  components: { Masthead },
  data() {
    const id = this.$route.params.id;

    return {
      product: products[id],
      titles: titles.filter(title => title.product === id),
    }
  }
}
</script>

<template>
  <Masthead />

  <section class="content-housing">
    <h1>{{ product.title }}</h1>

    <p v-if="titles.length <= 0">Coming soon!</p>

    <ul>
      <li v-for="title in titles">
        <a :href="title.reference">{{ title.title }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>


.content-housing {
  column-count: 1;
  text-align: center;
}

h1 {
  font-size: 2em;
}

section {
  column-count: 1;
  text-align: center;
}

li {
  margin: 1rem;
  font-size: 1.3rem;
}

a:hover {
  color: #555555;
}

</style>