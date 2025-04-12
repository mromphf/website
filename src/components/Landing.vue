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
  column-count: 1;
  column-gap: 1rem;
  margin-top: 10vh;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
}

@media(min-width: 1366px) {
  #ticketHousing {
    width: 90%;
    column-count: 2;
  }
}

@media(min-width: 1920px) {
  #ticketHousing {
    width: 75%;
  }
}

@media(min-width: 2560px){
  #ticketHousing {
    width: 60%;
  }
}

</style>