// src/router/index.ts or router.js (depending on setup)
import { createRouter, createWebHistory } from 'vue-router';

// Lazy-loaded views
const Home = () => import('../views/home.vue');
const About = () => import('../views/about.vue');
const Products = () => import('../views/products.vue'); 
const Contact = () => import('../views/contact.vue');
const Settings = () => import('../views/settings.vue');
const NotFound = () => import('../views/NotFound.vue'); // Create this file

const routes = [
  { path: '/', redirect: '/home' }, // Default redirect
  { path: '/home', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/products', name: 'products', component: Products },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }, // 404 catch-all
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
