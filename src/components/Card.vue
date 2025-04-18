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

</style>