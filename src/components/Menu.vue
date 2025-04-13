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
  width: 100%;
  height: 5vh;
  border: 1px solid purple;
  display: flex;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 2.5rem;
  width: 100%;
  height: 100%;

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
    margin-top: 5vh;
    margin-left: auto;
  }

  ul {
    width: 50%;
  }
}
</style>