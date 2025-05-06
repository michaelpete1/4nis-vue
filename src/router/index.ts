import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/about.vue";
import Products from "../views/products.vue";
import Contact from "../views/contact.vue";
import Settings from "../views/settings.vue";

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
