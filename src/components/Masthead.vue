<script>
export default {
  name: "Masthead"
}
</script>

<template>
  <header>
    <div class="header-left">
      <img src="/public/Teddy2.jpg" alt="Mike Romeo" height="400" width="400"/>
    </div>
    <div class="header-right">
      <h2>Mark</h2>
      <h1>"Mike Romeo"</h1>
      <h2>Romphf</h2>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 100%;
  height: 18vh;
}

header h1, h2 {
  text-align: center;
  line-height: 2.5rem;
}

header .header-left, .header-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 400px;
}

header .header-right {
  border: 1px solid blue;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

header .header-left {
  border: 1px solid orange;
}

header img {
  max-width: 100%;
  height: auto;
  border-radius: 15rem;
}

</style>