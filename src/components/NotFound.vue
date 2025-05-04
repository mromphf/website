<script>
export default {
  name: "NotFound"
}
</script>

<template>
  <section class="content-housing" aria-label="Not Found">
    <h1>Not Found</h1>
    <p>Seems like what you're looking for isn't here.</p>
    <p>Try starting over from <router-link to="/">Home</router-link></p>
  </section>
</template>

<style scoped>


a {
  color: blue;
}


.content-housing {
  column-count: 1;
  width: 50%;
  text-align: center;
}

</style>