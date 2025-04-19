<script setup>
import {computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";

const posts = import.meta.glob("@/pages/*.md");

const route = useRoute();
const slug = computed(() => route.params.slug);

const post = computed(() => {
  const loader = posts[`/src/pages/${slug.value}.md`];
  return loader ? defineAsyncComponent(loader) : null;
});

</script>

<template>
  <section class="content-housing single-column markdown">
    <component :is="post"></component>
  </section>
</template>

<style>

.single-column {
  column-count: 1;
}

.markdown h1 {
  text-align: center;
}

.markdown p {
  margin: 1em;
  text-align: justify;
}

</style>
