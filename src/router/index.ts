import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded views
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Products = () => import('../views/Products.vue')
const Contact = () => import('../views/Contact.vue')
// Removed Faq import
const NotFound = () => import('../views/NotFound.vue') // Optional 404 page

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/About', name: 'about', component: About },
  { path: '/Products', name: 'products', component: Products },
  { path: '/Contact', name: 'contact', component: Contact },
  // Removed Faq route
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
