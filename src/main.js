import Vue from 'vue'
import App from './App.vue'
import { Button, Field, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, Overlay, } from 'vant';
import "swiper/css/swiper.css"
import router from "./routers"
Vue.use(Button);
Vue.use(Field)
Vue.use(Icon)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
