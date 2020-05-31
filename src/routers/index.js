import VueRouter from "vue-router"
import Vue from "vue"
import routes from "./routes"
Vue.use(VueRouter)

const vueRouter = new VueRouter({
  mode: "history",
  routes
})
vueRouter.beforeEach((to, from, next) => {
  const path = ['/user']
  if (path.indexOf(to.fullPath) !== -1) {
    if (window.localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }

})

export default vueRouter