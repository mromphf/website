import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/components/Landing.vue'
import About from '@/components/About.vue'

const routes = [
    { path: '/', component: Landing},
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;