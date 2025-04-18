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
  <article>
    <h2>{{ title }}</h2>
  </article>
</template>

<style scoped>
article {
  align-items: center;
  background-color: aquamarine;
  border: 1px solid black;
  display: flex;
  height: 20rem;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
}


article:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  color: blue;
  cursor: pointer;
}

</style>