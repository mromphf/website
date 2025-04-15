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

header {
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 100%;
  height: 18vh;
}

h1, h2 {
  text-align: center;
  line-height: var(--line-height);
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
  transform: scale(0.3);
}

.right {
  border: 1px solid blue;
}

.left {
  border: 1px solid orange;
  overflow: visible;
  position: relative;
}

/* Small - Phones(landscape) */
@media(min-width: 640px) {
  img {
    transform: scale(0.5);
  }
}

/* Medium - Tablets(portrait) */
@media(min-width: 768px) {
  img {
    transform: scale(0.6);
  }
}

/* Large - Laptops */
@media(min-width: 1366px) {
  header {
    margin-top: 0;
  }

  img {
    transform: scale(0.8);
  }
}

@media(min-width: 2550px) {
  section {
    flex: 0 0 30%;
  }
}

</style>