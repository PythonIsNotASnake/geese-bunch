import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueCookies);
Vue.$cookies.config('1d')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
