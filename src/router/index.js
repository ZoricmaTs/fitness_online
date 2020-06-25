import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import Authorization from '../views/Authorization.vue'
import Register from '../views/Register.vue'
import TermsOfService from '../views/TermsOfService.vue'
import Questions from '../views/Questions.vue'
import Schedule from '../views/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    params: true
  },
  {
    path: '/home',
    name: 'HomeMain',
    component: Home,
    params: true
  },

  {
    path: '/signin',
    name: 'signin',
    component: Authorization
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register
  },
  {
    path: '/termsofservice',
    name: 'termsofservice',
    component: TermsOfService
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: TermsOfService
  },
  {
    path: '/email_confirmation',
    name: 'email_confirmation', //для роутеров
    component: EmailConfirmation,
    props: route => ({ email: route.query.email, code: route.query.code })
  }
]

const router = new VueRouter({
  abstract: true,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  routes,
  linkActiveClass: 'active', // помечать активными ссылками
  linkExactActiveClass: 'exact-active'
})

export default router
