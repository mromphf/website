<script setup>
import Menu from "@/components/Menu.vue";
import Masthead from "@/components/Masthead.vue";
</script>

<template>

  <main>
    <Menu />
    <Masthead />
    <router-view/>
  </main>

  <footer>
    Copyright &copy; 2025 Mark Romphf
  </footer>

</template>

<style scoped>
main {
  min-height: 90vh;
}

footer {
  background-color: lightcyan;
  width: 100%;
  text-align: center;
}
</style>
