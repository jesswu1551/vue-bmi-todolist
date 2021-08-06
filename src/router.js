import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import BMI from './views/BMI.vue'
import Todo from './views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmi',
    name: 'BMI',
    component: BMI
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
