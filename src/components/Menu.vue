<script>
export default {
  name: "Menu"
}
</script>

<template>
  <nav aria-label="Navigation Menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/fiction">Fiction</router-link></li>
      <li><router-link to="/maps">Maps & Mods</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  align-items: center;
  display: flex;
  margin-left: auto;
  padding: 0.5rem 1rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

ul {
  align-items: center;
  display: flex;
  gap: 1.2rem;
  height: 100%;
  list-style-type: none;
  padding: 0;
  width: 100%;
}

a {
  text-decoration: none;
  font-size: 1.1em;
}


/* Medium - Tablets(portrait) */
@media(min-width: 768px) {
  a {
    font-size: 1.8rem;
  }
}


/* Large - Laptops */
@media(min-width: 1280px) {
  nav {
    justify-content: flex-end;
    margin-top: 5vh;
  }

  ul {
    width: 50%;
  }
}
</style>