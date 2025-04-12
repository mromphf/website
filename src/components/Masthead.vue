<script>
export default {
  name: "Masthead"
}
</script>

<template>
  <header>
    <section class="left">
      <img src="/public/Teddy2.jpg" alt="Mike Romeo"/>
    </section>
    <section class="right">
      <h2>Mark</h2>
      <h1>"Mike Romeo"</h1>
      <h2>Romphf</h2>
    </section>
  </header>
</template>

<style scoped>

img {
  width: auto;
  transform: scale(0.3);
  border-radius: 20rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 100%;
  height: 18vh;
}

h1, h2 {
  font-size: 1.25rem;
  text-align: center;
  line-height: 1.5rem;
}

h1 {
  font-size: 1.5rem;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 100%;
  flex-direction: column;
}

header .right {
  border: 1px solid blue;
}

header .left {
  border: 1px solid orange;
}

/* Small - Phones(landscape) */
@media(min-width: 640px) {
  img {
    transform: scale(0.5);
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
}

/* Medium - Tablets(portrait) */
@media(min-width: 768px) {
  img {
    transform: scale(0.7);
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 3rem;
  }
}


/* Large - Laptops */
@media(min-width: 1366px) {
  img {
    transform: scale(0.8);
  }

  section {
    width: 45%;
  }
}

@media(min-width: 2550px) {
  section {
    width: 30.5%;
  }
}

</style>