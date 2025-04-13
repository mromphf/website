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
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

article:hover {
  color: blue;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
}

section {
  border: 1px solid blue;
}

h2, h3 {
  text-align: center;
  line-height: 5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>