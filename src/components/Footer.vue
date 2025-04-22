<script>
export default {
  name: "Footer"
}
</script>

<template>
  <footer aria-label="Footer">
    <section></section>

    <section aria-label="Copyright">
      Copyright &copy; 2025 Mark Romphf
    </section>

    <section aria-label="Site Version">v0.7</section>

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