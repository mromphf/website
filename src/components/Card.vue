<script>
export default {
  name: "Card",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
      default: "Card"
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'mapview', params: { id: id }}">
    <article class="content-card">
      <h2>{{ title }}</h2>
    </article>
  </router-link>
</template>

<style scoped>

.content-card {
  height: 20rem;
}

.content-card:hover {
  border: 1px solid teal;
  box-shadow: 1px 1px 2px teal;
  background-color: beige;
}

.content-card:hover h2 {
  color: teal;
}

</style>