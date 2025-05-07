<script setup>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <main aria-label="Page Body">
    <Nav />
    <router-view/>
  </main>

  <Footer />

</template>

<style scoped>

main {
  min-height: 90vh;
}
</style>
