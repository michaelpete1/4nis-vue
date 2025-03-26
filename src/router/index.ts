import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/About", name: "About", component: About },
  { path: "/Products", name: "Products", component: Products },
  { path: "/Contact", name: "Contacts", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
