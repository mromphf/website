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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  color: blue;
  cursor: pointer;
}

section {
  border: 1px solid blue;
}

h2, h3 {
  line-height: 5rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>