<script>
import Ticket from "@/components/Ticket.vue";
import tickets from "@/tickets.js";

export default {
  name: "Landing",
  components: {Ticket},
  data() {
    return {
      tickets: tickets
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <Ticket v-for="ticket in tickets"
            :key="ticket.id"
            :product="ticket.product"
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