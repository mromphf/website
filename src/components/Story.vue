<script setup>
import {computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";
import NotFound from "@/components/NotFound.vue";

const posts = import.meta.glob("@/pages/*.md");

const route = useRoute();
const slug = computed(() => route.params["slug"]);

const post = computed(() => {
  const loader = posts[`/src/pages/${slug.value}.md`];
  return loader ? defineAsyncComponent(loader) : NotFound;
});

</script>

<template>
  <article class="content-housing single-column markdown" aria-label="Story Text">
    <component :is="post"></component>
  </article >
</template>

<style>

.single-column {
  column-count: 1;
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
