import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/DashboardPage.vue';
import NotFoundPage from './components/NotFoundPage.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/dashboard/:username', component: DashboardPage, props: true },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;

