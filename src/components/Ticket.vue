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
    },
    subreference: {
      type: String,
      default: "#"
    }
  }
}
</script>

<template>
  <article class="content-card">
    <section>
      <h3><a :href="subreference">{{ product }}</a></h3>
    </section>

    <section>
      <h2><a :href="reference">{{ title }}</a></h2>
    </section>
  </article>
</template>

<style scoped>

a {
  text-decoration: none;
}

h2 a:hover, h3 a:hover {
  color: yellow;
}

a:visited {
  color: blue
}

.content-card {
  border: none;
  display: grid;
  grid-template-columns: 1fr 3fr;
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