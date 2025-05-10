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
      tickets: titles.slice(0, 10),
      products: products,
      productTitle(t) {
        return products[t.product]?.title || 'Void'
      },
      productRef(t) {
        const prod = products[t.product] || {};

        if (prod.path === "fiction" || prod.path === "blog") {
          return prod.path;
        }

        return `${prod.path}/${prod.id}`;
      }
    }
  },
}
</script>

<template>
  <Masthead />

  <section class="content-housing" aria-label="Content">
    <Ticket v-for="ticket in tickets"
            :product="productTitle(ticket)"
            :title="ticket.title"
            :reference="ticket.reference"
            :subreference="productRef(ticket)"
            :internal="ticket.internal ?? false"
    />
  </section>
</template>

<style scoped>

Ticket {
  break-inside: avoid;
  display: block;
  margin-bottom: 1rem;
}

</style>