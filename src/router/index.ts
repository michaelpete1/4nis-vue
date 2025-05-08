import { createRouter, createWebHistory } from 'vue-router';

// Dynamic imports instead of direct imports
const Home = () => import('../views/home.vue');
const About = () => import('../views/about.vue');
const Products = () => import('../views/products.vue'); 
const Contact = () => import('../views/contact.vue');
const Settings = () => import('../views/settings.vue');

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/products", name: "products", component: Products },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/settings", name: "settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;