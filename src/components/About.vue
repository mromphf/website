<script>
import Masthead from "@/components/Masthead.vue";

export default {
  name: "About",
  components: { Masthead }
}
</script>

<template>
  <Masthead />

  <section class="content-housing">
    <div>
      <h1>About</h1>
      <h3>Software Developer from Canada</h3>
      <ul>
        <li><a href="https://github.com/mromphf">Github</a></li>
        <li><a href="https://www.gamemaps.com/profile/1267645">GameMaps</a></li>
      </ul>
      <a href="mailto:markromphf@gmail.com">Email me</a>
    </div>
  </section>
</template>

<style scoped>
ul {
  list-style-type: none;
}

.content-housing {
  column-count: 1;
}

</style>