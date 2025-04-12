<script>
import Masthead from "@/components/Masthead.vue";
import Ticket from "@/components/Ticket.vue";
export default {
  name: "Landing",
  components: {Ticket, Masthead}
}
</script>

<template>
  <Masthead />
  <section id="ticketHousing">
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
  </section>
</template>

<style scoped>
#ticketHousing {
  border: 1px red solid;
  column-count: 2;
  column-gap: 1rem;
  margin-top: 2.5rem;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
}
</style>