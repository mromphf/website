<script>
import Masthead from "@/components/Masthead.vue";
import titles from "@/data/titles.js";


export default {
  name: 'Fiction',
  components: { Masthead },
  data() {
    return {
      titles: Object.values(titles)
        .filter(title => title.product === "fiction")
    }
  }
}

</script>

<template>
  <Masthead />

  <section class="content-housing">
    <div>
      <h1>Fiction</h1>

      <ul>
        <li v-for="title in titles" :key="title.id">
          <router-link :to="title.reference">{{ title.title }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

h1 {
  font-size: 2em;
}

section {
  column-count: 1;
  text-align: center;
}

ul {
  list-style-type: none;
}

li {
  margin: 1rem;
  font-size: 1.3rem;
}

a {
  text-decoration: none;
}

a:hover {
  color: #555555;
}

</style>