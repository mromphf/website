<script setup>
import Menu from "@/components/Menu.vue";
import Masthead from "@/components/Masthead.vue";
</script>

<template>
  <main>
    <Menu />
    <Masthead />
    <router-view/>
    <footer>
      Copyright &copy; 2025 Mark Romphf
    </footer>
  </main>
</template>

<style scoped>
footer {
  background-color: lightcyan;
  width: 100%;
  text-align: center;
}
</style>
