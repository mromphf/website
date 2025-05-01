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
      <router-link :to="subreference">{{ product }}</router-link>
    </section>

    <section>
      <router-link :to="reference">{{ title }}</router-link>
    </section>
  </article>
</template>

<style scoped>

a {
  text-decoration: none;
  line-height: 5rem;
  overflow: hidden;
  text-align: center;
  text-overflow: clip;
  white-space: nowrap;
}

a:hover{
  color: #555555;
}

.content-card {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

</style>