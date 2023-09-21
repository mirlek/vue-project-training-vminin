import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Categories from '../views/Categories.vue'
import DetailRecords from '../views/DetailRecords.vue'
import History from '../views/History.vue'
import Planning from '../views/Planning.vue'
import Profile from '../views/Profile.vue'
import Record from '../views/Record.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: Login
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: Categories
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: History
  },
  {
    path: '/detail-records',
    name: 'detail-records',
    meta: { layout: 'main' },
    component: DetailRecords
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: Planning
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: Profile
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: Record
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
