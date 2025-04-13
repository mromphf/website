<script>
export default {
  name: "Menu"
}
</script>

<template>
  <nav>
    <ul>
      <li>Foo</li>
      <li>Bar</li>
      <li>Baz</li>
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
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  gap: 2.5rem;
  width: 100%;
}

li {
  font-size: 2rem;
}

/* Large - Laptops */
@media(min-width: 1366px) {
  nav {
    justify-content: flex-end;
    width: 50%;
    margin-top: 5rem;
    margin-left: auto;
  }

  ul {
    margin-left: 5rem;
  }
}
</style>