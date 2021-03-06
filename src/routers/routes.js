export default [
  {
    path: "/home",
    component: () => import('../pages/Home')
  },
  {
    path: "/goodslist",
    component: () => import('../pages/GoodsList')
  },
  {
    path: "/login",
    component: () => import('../pages/Login')
  },
  {
    path: "/ddd",
    component: () => import('../components/ddd')
  },

  {
    path: "/register",
    component: () => import('../pages/Register')
  },
  {
    path: "/detail",
    component: () => import('../pages/Detail')
  },
  {
    path: "/search",
    component: () => import('../pages/Search'),


  },
  {
    path: "/shoppingcart",
    component: () => import('../pages/ShoppingCart')
  },
  {
    path: "/user",
    component: () => import('../pages/User')
  },
  {
    path: "/worthbuying",
    component: () => import('../pages/WorthBuying')
  },
  {
    path: "/",
    redirect: '/home'
  }
]