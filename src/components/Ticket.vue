<script>
export default {
  name: "Ticket"
}
</script>

<template>
  <article>
    <section>
      <h3>Product</h3>
    </section>

    <section>
      <h2>Ticket Please</h2>
    </section>
  </article>
</template>

<style scoped>
article {
  align-items: center;
  background-color: aquamarine;
  column-count: 2;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

section {
  border: 1px solid blue;
}

h2 {
  text-align: center;
  line-height: 5rem;
}

h3 {
  text-align: center;
  line-height: 5rem;
}
</style>