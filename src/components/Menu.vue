<script>
export default {
  name: "Menu"
}
</script>

<template>
  <nav>
    <ul>
      <li><a href="#">Foo</a></li>
      <li><a href="#">Bar</a></li>
      <li><a href="#">Baz</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  align-items: center;
  border: 1px solid purple;
  display: flex;
  height: 5vh;
  width: 100%;
}

ul {
  align-items: center;
  display: flex;
  gap: 2.5rem;
  height: 100%;
  list-style-type: none;
  padding: 0;
  width: 100%;

  background-color: lightgray;
}

li {
  font-size: 2rem;
}

a {
  text-decoration: none;
}

/* Large - Laptops */
@media(min-width: 1366px) {
  nav {
    justify-content: flex-end;
    margin-left: auto;
    margin-top: 5vh;
  }

  ul {
    width: 50%;
  }
}
</style>