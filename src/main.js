import Vue from 'vue'
import App from './App.vue'
import "./van"
import "swiper/css/swiper.css"
import router from "./routers"
import store from "./store"
import VueLazyload from 'vue-lazyload'
// import VueVirtualScroller from 'vue-virtual-scroller'
// Vue.use(VueVirtualScroller)
// import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
// import { RecycleScroller } from 'vue-virtual-scroller'
// Vue.component('RecycleScroller', RecycleScroller)
import 'xe-utils'
import { VXETable } from 'vxe-table'
import 'vxe-table/lib/index.css'
// Vue.prototype.$XModal = VXETable.modal
Vue.use(VXETable)
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
