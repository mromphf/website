<script>
import Ticket from "@/components/Ticket.vue";

export default {
  name: "Content",
  components: {Ticket}
}
</script>

<template>
  <section>
    <Ticket product="NWN EE"
            title="Sinister Sweetwater Cider"
            reference="https://neverwintervault.org/project/nwnee/module/sinister-sweetwater-cider"/>

    <Ticket product="Warcraft II"
            title="Encampments"
            reference="https://www.gamemaps.com/details/31958"/>

    <Ticket product="Half-Life 2"
            title="Person of Interest"
            reference="https://www.runthinkshootlive.com/posts/person-of-interest/"/>

    <Ticket product="Warcraft II"
            title="Sorrow"
            reference="https://www.gamemaps.com/details/32813"/>

    <Ticket product="Foo" title="Foo Ticket"/>
    <Ticket product="Bar" title="Bar Ticket"/>
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

Ticket {
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

@media(min-width: 2560px){
  section {
    width: 60%;
  }
}
</style>