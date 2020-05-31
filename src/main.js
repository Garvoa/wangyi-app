import Vue from 'vue'
import App from './App.vue'
import { Button, Field, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, Overlay, Tab, Tabs, Form, Toast, TreeSelect } from 'vant';
import "swiper/css/swiper.css"
import router from "./routers"
import store from "./store"
import VueLazyload from 'vue-lazyload'
Vue.use(Button);
Vue.use(Field)
Vue.use(Icon)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Overlay);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Form);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
Vue.use(TreeSelect);
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
