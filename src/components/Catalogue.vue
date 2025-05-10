<script>
import Masthead from "@/components/Masthead.vue";
import titles from "@/data/titles.js";


export default {
  name: 'Catalogue',
  components: { Masthead },
  data() {
    const hdr = this.$route["meta"]["header"];

    return {
      header: hdr,
      titles: Object.values(titles)
        .filter(title => title.product === hdr.toLowerCase())
    }
  },
  watch: {
    $route(to, from) {
      const hdr = this.$route["meta"]["header"];

      this.header = hdr;
      this.titles = Object.values(titles)
        .filter(title => title.product === hdr.toLowerCase())
    }
  }
}

</script>

<template>
  <Masthead />

  <section class="content-housing">
    <div>
      <h1>{{ header }}</h1>

      <ul>
        <li v-for="title in titles" :key="title.id">
          <router-link :to="title.reference">{{ title.title }}</router-link>
          <p class="date">{{ title.date }}</p>
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

li {
  margin: 1rem;
  font-size: 1.3rem;
}

a:hover {
  color: #555555;
}

.content-housing {
  margin-top: 0;
}

</style>