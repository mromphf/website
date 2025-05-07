<script>
export default {
  name: "MobileNav",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
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
.mobile {
  background-color: gray;
  position: absolute;
  top: 5rem;
  right: 0;
  z-index: 5;
  font-size: 1.3em;
}
</style>