<script>
import Ticket from "@/components/Ticket.vue";

export default {
  name: "Content",
  components: {Ticket}
}
</script>

<template>
  <section>
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
    <Ticket/>
  </section>
</template>

<style scoped>

section {
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
  section {
    width: 90%;
    column-count: 2;
  }
}

@media(min-width: 1920px) {
  section {
    width: 75%;
  }
}

@media(min-width: 2560px){
  section {
    width: 60%;
  }
}
</style>