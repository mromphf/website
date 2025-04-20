import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Fiction from '@/components/Fiction.vue';
import Landing from '@/components/Landing.vue'
import Maps from "@/components/Maps.vue";
import Product from "@/components/Product.vue";
import Story from "@/components/Story.vue";

const routes = [
    { name: 'root', path: '/', component: Landing},
    { name: 'about', path: '/about', component: About },
    { name: 'maps', path: '/maps', component: Maps },
    { name: 'fiction', path: '/fiction', component: Fiction },
    { name: 'mapview', path: '/maps/:id', component: Product },
    { name: 'story', path: '/fiction/:slug', component: Story },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;