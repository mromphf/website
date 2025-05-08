<script>

export default {
  name: "Nav",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    handleExternalClick(event) {
      const menu = this.$refs.mobileMenu;
      const button = this.$refs.toggleButton;

      if (this.visible &&
          !menu?.contains(event.target) &&
          !button?.contains(event.target)) {

        this.visible = false;
      }
    },
  },
  watch: {
    visible(val) {
      if (val) {
        document.addEventListener(
            "click", this.handleExternalClick);
      } else {
        document.removeEventListener(
            "click", this.handleExternalClick);
      }
    },
  },
  mounted() {
    this.$watch('$route', () => {
      this.visible = false;
    })
  },
  beforeUnmount() {
    document.removeEventListener("click",
        this.handleExternalClick);
  },
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

    <button ref="toggleButton" @click="visible = !visible">Menu</button>
  </nav>

  <nav v-if="visible" class="mobile" ref="mobileMenu">
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
  justify-content: flex-end;
  margin-right: auto;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5em;
}

button {
  background-color: var(--background-color);
  border-color: var(--text-color);
  color: var(--text-color);
  margin-left: auto;
  border-style: solid;
  font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

button:hover {
  cursor: pointer;
  background-color: beige;
  color: black;
}

.mobile {
  background-color: var(--background-color);
  position: absolute;
  top: 4.35rem;
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
}

.mobile ul {
  display: inline;
}

a, button {
  text-decoration: none;
  font-size: 1.3em;
}

a:hover {
  color: #555555;
}

button {
  width: 7rem;
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