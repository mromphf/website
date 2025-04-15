<script>
export default {
  name: "Ticket",
  props: {
    product: {
      type: String,
      default: "Product"
    },
    title: {
      type: String,
      default: "Ticket Please"
    },
    reference: {
      type: String,
      default: "#"
    }
  }
}
</script>

<template>
  <a :href="reference">
    <article>
      <section>
        <h3>{{ product }}</h3>
      </section>

      <section>
        <h2>{{ title }}</h2>
      </section>
    </article>
  </a>
</template>

<style scoped>

a {
  text-decoration: none;
}

a:visited {
  color: blue
}

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