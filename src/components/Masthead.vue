<script>
export default {
  name: "Masthead"
}
</script>

<template>
  <header aria-label="Header">
    <section class="left">
      <img src="/src/assets/Teddy2.webp" alt="Mike Romeo"/>
      <img class="headshot" src="/src/assets/headshot.webp" alt="Headshot"/>
    </section>
    <section class="right">
      <h2>Mark</h2>
      <h1>"Mike Romeo"</h1>
      <h2>Romphf</h2>
    </section>
  </header>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 100%;
  height: 15rem;
}

h1, h2 {
  text-align: center;
  line-height: var(--line-height);
  color: black;
}

h1 {
  font-size: var(--h1-size);
}

h2 {
  font-size: var(--h2-size);
}

section {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  height: 100%;
  justify-content: center;
}

img {
  border-radius: 20rem;
  position: absolute;
  transform: scale(0.425);
  z-index: 0;
}

.headshot {
  transform: scale(0.15) translate(27em, 27em);
  z-index: 1;
}

.left {
  overflow: visible;
  position: relative;
}

/* Small - Phones(landscape) */
@media(min-width: 640px) {
  img {
    transform: scale(0.5);
  }

  header {
    margin-top: 3rem;
  }
}

/* Medium - Tablets(portrait) */
@media(min-width: 768px) {
  .headshot {
    transform: scale(0.175) translate(29em, 29em);
  }
}

/* Large - Laptops */
@media(min-width: 1280px) {
  header {
    margin-top: 0;
  }

  img {
    transform: scale(0.6);
  }

  .headshot {
    transform: scale(0.2) translate(29em, 29em);
  }
}

@media(min-width: 1920px) {
  img {
    transform: scale(0.8);
  }
}

@media(min-width: 2550px) {
  section {
    flex: 0 0 30%;
  }

  .headshot {
    transform: scale(0.3) translate(30em, 25em);
  }
}

</style>