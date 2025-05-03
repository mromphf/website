<script setup>
import {computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";
import NotFound from "@/components/NotFound.vue";

const posts = import.meta.glob("@/pages/*.md");

const route = useRoute();
const slug = computed(() => route.params.slug);

const post = computed(() => {
  const loader = posts[`/src/pages/${slug.value}.md`];
  return loader ? defineAsyncComponent(loader) : NotFound;
});

</script>

<template>
  <section class="content-housing single-column markdown" aria-label="Story Text">
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
  margin-left: 1em;
  margin-right: 1em;
  text-align: justify;
  line-height: 1.75em;
  text-indent: 1.5em;
}

.markdown a {
  color: blue;
}

@media(prefers-color-scheme: dark) {
  .markdown a {
    color: #78c8b5;
  }
}

.markdown hr {
  margin: 2em auto;
  width: 25%;
}

.markdown .center {
  text-align: center;
  margin: 0.5em;
}

@media(min-width: 1280px) {
  .content-housing {
    width: 60%;
  }
}

@media(min-width: 2560px){
  .content-housing {
    width: 40%;
  }
}

</style>
