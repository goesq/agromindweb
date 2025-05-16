import './assets/main.css'
import '../src/assets/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import InitialPage from './views/InitialPage.vue'
import LoginPage from './views/LoginPage.vue'
import PrincipalPage from './views/PrincipalPage.vue'
import DashboardPage from './views/DashboardPage.vue'

const routes = [
  {
    path: '/',
    name: 'InitialPage',
    component: InitialPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/principal',
    name: 'PrincipalPage',
    component: PrincipalPage
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
