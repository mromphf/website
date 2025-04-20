<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer>
    <section></section>

    <section>
      Copyright &copy; 2025 Mark Romphf
    </section>

    <section>v0.5</section>

  </footer>
</template>

<style scoped>

footer {
  background-color: lightcyan;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  text-align: center;
  width: 80%;
}

</style>