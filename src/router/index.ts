import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/about.vue';
import Products from '../views/products.vue';
import Contact from '../views/contact.vue';
import Settings from '../views/settings.vue';
import Home from '../views/home.vue'; // Make sure the casing matches the file name exactly

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/products', name: 'products', component: Products },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/settings', name: 'settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
