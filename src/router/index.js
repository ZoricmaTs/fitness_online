import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import Authorization from '../views/Authorization.vue'
import Register from '../views/Register.vue'
import TermsOfService from '../views/TermsOfService.vue'
import AboutService from '../views/AboutService.vue'
import ContactDetail from '../views/ContactDetail.vue'
import ContactDetailTrainer from '../views/Trainer/ContactDetailTrainer.vue'
import ContactDetailUser from '../views/User/ContactDetailUser.vue'
import OurTrainersUser from '../views/User/OurTrainersUser.vue'
import OurTrainersTrainer from '../views/Trainer/OurTrainersTrainer.vue'
import OurTrainers from '../views/OurTrainers.vue'
import AboutServiceAuth from '../views/User/AboutServiceAuth.vue'
import AboutServiceTrainer from '../views/Trainer/AboutServiceTrainer.vue'
import AdvancementsTrainer from '../views/Trainer/AdvancementsTrainer.vue'
import QuestionsUser from '../views/User/QuestionsUser.vue'
import QuestionsTrainer from '../views/Trainer/QuestionsTrainer.vue'
import Questions from '../views/Questions.vue'

import SettingUser from '../views/User/SettingUser.vue'
import SettingTrainer from '../views/Trainer/SettingTrainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/email_confirmation',
    name: 'email_confirmation', //для роутеров
    component: EmailConfirmation,
    props: route => ({ email: route.query.email, code: route.query.code })
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/contactdetail',
    name: 'contactdetail',
    component: ContactDetail
  },
  {
    path: '/profiletrainerstart/:id/advancements',
    name: 'advancements',
    component: AdvancementsTrainer,
    props: true
  },

  {
    path: '/profiletrainerstart/:id/contactdetail',
    name: 'contactDetailTrainer',
    component: ContactDetailTrainer,
    props: true
  },
  {
    path: '/profileuserstart/:id/contactdetail',
    name: 'contactDetailUser',
    component: ContactDetailUser,
    props: true
  },
  {
    path: '/aboutservice',
    name: 'aboutservice',
    component: AboutService
  },
  {
    path: '/profiletrainerstart/:id/aboutservice',
    name: 'aboutserviceTrainer',
    component: AboutServiceTrainer,
    props: true
  },
  {
    path: '/profileuserstart/:id/aboutservice',
    name: 'aboutserviceUser',
    component: AboutServiceAuth,
    props: true
  },
  {
    path: '/profiletrainerstart/:id/SettingTrainer',
    name: 'settingTrainer',
    component: SettingTrainer,
    props: true
  },
  {
    path: '/profileuserstart/:id/SettingUser',
    name: 'settingUser',
    component: SettingUser,
    props: true
  },
  {
    path: '/ourtrainers',
    name: 'ourTrainers',
    component: OurTrainers
  },
  {
    path: '/profileuserstart/:id/ourtrainers',
    name: 'ourTrainersUser',
    component: OurTrainersUser,
    props: true
  },
  {
    path: '/profiletrainerstart/:id/ourtrainers',
    name: 'ourTrainersTrainer',
    component: OurTrainersTrainer,
    props: true
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/profileuserstart/:id/questions',
    name: 'questionsUser',
    component: QuestionsUser,
    props: true
  },
  {
    path: '/profiletrainerstart/:id/questions',
    name: 'questionsTrainer',
    component: QuestionsTrainer,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active', // помечать активными ссылками
  linkExactActiveClass: 'exact-active'
})

export default router
