<script>
export default {
  name: "ProductView",
  data() {
    return {
      title: this.$route.params.title,
    }
  }
}
</script>

<template>
  <section class="content-housing">
    <h1>{{ title }}</h1>
  </section>
</template>

<style scoped>

.content-housing {
  text-align: center;
}

</style>