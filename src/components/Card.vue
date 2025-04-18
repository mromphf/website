<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: "Card"
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'mapview', params: { title: title }}">
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