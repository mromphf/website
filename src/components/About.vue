<script>
import Masthead from "@/components/Masthead.vue";

export default {
  name: "About",
  components: { Masthead }
}
</script>

<template>
  <Masthead />

  <section class="content-housing" aria-label="About">
    <div>
      <h2>Software developer from Canada</h2>
      <ul>
        <li><a href="https://github.com/mromphf">Github</a></li>
        <li><a href="https://bsky.app/profile/mikeromeo24.bsky.social">Bluesky</a></li>
        <li><a href="https://www.gamemaps.com/profile/1267645">GameMaps</a></li>
      </ul>
      <a class="center" href="mailto:markromphf@gmail.com">Email me</a>
    </div>
  </section>
</template>

<style scoped>
ul {
  margin-top: 1rem;
  list-style-type: none;
  display: flex;
  gap: 1rem;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}

.center {
  margin-top: 1vh;
  display: flex;
  justify-content: center;
}

.content-housing {
  column-count: 1;
  width: 90%;
  margin-top: 1.5rem;
}

a {
  font-size: 1.1em;
}

a:hover {
  color: #555555;
}

@media(min-width: 768px) {
  .content-housing {
    width: 70%;
  }
}

@media(min-width: 2550px) {
  .content-housing {
    width: 40%;
  }
}

</style>