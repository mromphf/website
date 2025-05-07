<script>
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "Nav",
  components: {MobileNav},
  data() {
    return {
      visible: false
    }
  }
}
</script>

<template>
  <nav aria-label="Navigation Menu">
    <ul class="desktop">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/fiction">Fiction</router-link></li>
      <li><router-link to="/maps">Maps & Mods</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>

    <button @click="visible = !visible">Menu</button>
  </nav>

  <nav v-if="visible" class="mobile">
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

button {
  margin-left: auto;
}

.mobile {
  background-color: gray;
  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 5;
  font-size: 1.3em;
}

.desktop {
  display: none;
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

.mobile ul {
  display: inline;
}

a, button {
  text-decoration: none;
  font-size: 1.1em;
}

a:hover {
  color: #555555;
}

button {
  width: 6rem;
  height: 3rem;
}


/* Medium - Tablets(portrait) */
@media(min-width: 768px) {
  a {
    font-size: 1.8rem;
  }

  button {
    display: none;
  }

  .desktop {
    display: flex;
  }

  .mobile {
    display: none;
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