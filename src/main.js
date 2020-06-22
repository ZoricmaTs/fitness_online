import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import VueYoutube from 'vue-youtube'
import Vuex from 'vuex'
Vue.use(Vuelidate)
Vue.use(VueYoutube)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
