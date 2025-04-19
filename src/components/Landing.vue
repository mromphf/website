<script>
import Ticket from "@/components/Ticket.vue";
import Masthead from "@/components/Masthead.vue";
import titles from "@/data/titles.js";
import products from "@/data/products.js";

export default {
  name: "Landing",
  components: {Ticket, Masthead},
  data() {
    return {
      tickets: titles,
      products: products,
    }
  }
}
</script>

<template>
  <Masthead />

  <section class="content-housing">
    <Ticket v-for="ticket in tickets"
            :product="products[ticket.product]?.title || 'No Product'"
            :title="ticket.title"
            :reference="ticket.reference"/>
  </section>
</template>

<style scoped>

Ticket {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>