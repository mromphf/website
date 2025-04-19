<script setup>
import Post from "@/pages/sample-post.md"
</script>

<template>
  <section class="content-housing single-column markdown">
    <Post />
  </section>
</template>

<style>

.single-column {
  column-count: 1;
}

.markdown p {
  margin: 1em;
  text-align: justify;
}

</style>
