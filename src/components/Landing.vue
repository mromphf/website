<script>
import Ticket from "@/components/Ticket.vue";
import titles from "@/titles.js";
import products from "@/products.js";

export default {
  name: "Landing",
  components: {Ticket},
  data() {
    return {
      tickets: titles,
      products: products,
    }
  }
}
</script>

<template>
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