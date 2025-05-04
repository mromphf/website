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
    internal: {
      type: Boolean,
      default: false
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
    <section id="subreference">
      <router-link :to="subreference">{{ product }}</router-link>
    </section>

    <section>
      <router-link v-if="internal" :to="reference">{{ title }}</router-link>
      <a v-if="!internal" :href="reference">{{ title }}</a>
    </section>
  </article>
</template>

<style scoped>

a:hover {
  color: #555555;
}

.content-card {
  display: grid;
  column-count: 1;
  font-size: 1.2em;
  height: 7.5rem;
  padding: 0.75em;
}

#subreference {
  order: 1;
  font-size: 0.8em;
}



/* Small - Phones(landscape) */
@media(min-width: 640px) {
  :root {
    --h1-size: 1.75rem;
    --h2-size: 1.5rem;
  }

  .content-card {
    column-count: 2;
    grid-template-columns: 2fr 3fr;
    height: 5rem;
  }

  #subreference {
    order: 0;
  }
}

</style>