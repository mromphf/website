<script>
export default {
  name: "Product",
  props: {
    title: {
      type: String,
      default: "Product"
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