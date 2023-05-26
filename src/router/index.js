import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import CatFacts from '../components/CatFact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catfacts',
    name: 'CatFacts',
    component: CatFacts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes
})

export default router;