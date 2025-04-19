import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Fiction from '@/components/Fiction.vue';
import Landing from '@/components/Landing.vue'
import Maps from "@/components/Maps.vue";
import Product from "@/components/Product.vue";
import Story from "@/components/Story.vue";

const routes = [
    { path: '/', component: Landing},
    { path: '/about', component: About },
    { path: '/maps', component: Maps },
    { path: '/fiction', component: Fiction },
    { name: 'mapview', path: '/maps/:id', component: Product },
    { name: 'story', path: '/story/:slug', component: Story },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;