<script>
import Masthead from "@/components/Masthead.vue";

export default {
  name: 'Fiction',
  components: { Masthead }
}

</script>

<template>
  <Masthead />

  <section class="content-housing">
    <div>
      <h1>Fiction</h1>
      <ul>
        <li><router-link to="/fiction/sample-post">Sample Story</router-link></li>
        <li><router-link to="/fiction/foo-post">Foo Story</router-link></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

section {
  column-count: 1;
  text-align: center;
}

ul {
  list-style-type: none;
}

</style>