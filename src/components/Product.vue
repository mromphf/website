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
  <article class="content-card">
    <h2>{{ title }}</h2>
  </article>
</template>

<style scoped>

.content-card {
  height: 20rem;
}

</style>