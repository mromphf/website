<script>
import Masthead from "@/components/Masthead.vue";
import Ticket from "@/components/Ticket.vue";
import Menu from "@/components/Menu.vue"
export default {
  name: "Landing",
  components: {Ticket, Masthead, Menu}
}
</script>

<template>
  <Menu />
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
  border: 1px solid red;
  column-count: 2;
  column-gap: 1rem;
  margin-top: 7vh;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
}
</style>