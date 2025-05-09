import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/components/About.vue'
import Catalogue from '@/components/Catalogue.vue';
import Landing from '@/components/Landing.vue'
import Maps from "@/components/Maps.vue";
import Product from "@/components/Product.vue";
import Post from "@/components/Post.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    { name: 'root',path: '/', component: Landing, meta: {title: 'Mike Romeo'} },
    { name: 'about', path: '/about', component: About , meta: {title: 'About | Mike Romeo'}},
    { name: 'maps', path: '/maps', component: Maps , meta: { title: 'Maps & Mods | Mike Romeo' }},
    { name: 'fiction', path: '/fiction', component: Catalogue, meta: {title: 'Fiction | Mike Romeo' } },
    { name: 'mapview', path: '/maps/:id', component: Product , meta: {title: 'Maps | Mike Romeo' } },
    { name: 'story', path: '/fiction/:slug', component: Post, meta: { title: 'Post | Mike Romeo' }},
    { name: 'post', path: '/blog/:slug', component: Post, meta: { title: 'Blog | Mike Romeo' }},
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