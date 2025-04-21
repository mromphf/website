<script setup>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <main aria-label="Page Body">
    <Menu />
    <router-view/>
  </main>

  <Footer />

</template>

<style scoped>

main {
  min-height: 90vh;
}

</style>
