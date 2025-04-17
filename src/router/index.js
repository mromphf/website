import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Landing from '@/components/Landing.vue'
import Maps from "@/components/Maps.vue";

const routes = [
    { path: '/', component: Landing},
    { path: '/about', component: About },
    { path: '/maps', component: Maps },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;