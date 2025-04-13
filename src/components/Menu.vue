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
  background-color: blanchedalmond;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-left: 2rem;
  gap: 1rem;
  width: 100%;
}

li {
  font-size: 2rem;
}
</style>