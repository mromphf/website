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

    <section aria-label="Site Version">v1.03</section>

  </footer>
</template>

<style scoped>

footer {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: auto;
  text-align: center;
  width: 80%;
  font-size: 0.8em;
}

@media(min-width: 1280px) {
  footer {
    font-size: 1em;
    width: 60%;
  }
}


@media(min-width: 1920px) {
  footer {
    font-size: 1em;
    width: 40%;
  }
}

</style>