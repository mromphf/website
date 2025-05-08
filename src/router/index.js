import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/components/About.vue'
import Fiction from '@/components/Fiction.vue';
import Landing from '@/components/Landing.vue'
import Maps from "@/components/Maps.vue";
import Product from "@/components/Product.vue";
import Story from "@/components/Story.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    { name: 'root',path: '/', component: Landing, meta: {title: 'Mike Romeo'} },
    { name: 'about', path: '/about', component: About , meta: {title: 'About | Mike Romeo'}},
    { name: 'maps', path: '/maps', component: Maps , meta: { title: 'Maps & Mods | Mike Romeo' }},
    { name: 'fiction', path: '/fiction', component: Fiction, meta: {title: 'Fiction | Mike Romeo' } },
    { name: 'mapview', path: '/maps/:id', component: Product , meta: {title: 'Maps | Mike Romeo' } },
    { name: 'story', path: '/fiction/:slug', component: Story, meta: { title: 'Story | Mike Romeo' }},
    { name: 'post', path: '/blog/:slug', component: Story, meta: { title: 'Blog | Mike Romeo' }},
    { name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Not Found | Mike Romeo'} },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

router.beforeEach((to, from, next) => {
    const def = "Mike Romeo";
    document.title = to.meta['title'] || def;
    next();
})

export default router;