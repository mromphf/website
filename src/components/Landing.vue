<script>
import Masthead from "@/components/Masthead.vue";
import Content from "@/components/Content.vue";
import Menu from "@/components/Menu.vue"
export default {
  name: "Landing",
  components: {Content, Masthead, Menu}
}
</script>

<template>
  <Menu />
  <Masthead />
  <Content />
  <footer>
    Copyright &copy; 2025 Mark Romphf
  </footer>
</template>

<style scoped>
footer {
  background-color: lightcyan;
  width: 100%;
  text-align: center;
}
</style>