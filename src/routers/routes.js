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
    path: "/lgoin",
    component: () => import('../pages/Login')
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