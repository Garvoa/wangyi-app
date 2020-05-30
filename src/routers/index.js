import VueRouter from "vue-router"
import Vue from "vue"
import routes from "./routes"
Vue.use(VueRouter)

const vueRouter = new VueRouter({
  mode: "history",
  routes
})


export default vueRouter