import Vue from 'vue'
import App from './App.vue'
import "./van"
import "swiper/css/swiper.css"
import router from "./routers"
import store from "./store"
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
// or with options
import loading from './assets/timg.gif'
Vue.use(VueLazyload, {
  loading
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
