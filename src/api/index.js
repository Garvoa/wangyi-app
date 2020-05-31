import ajax from "./axios"
//主页数据
export const reqHome = () => ajax.get('/home')
// 商品列表右侧
export const reqcategoryRight = () => ajax.get('/categoryRight')
// 商品列表左侧
export const reqcategoryLeft = (id) => ajax.get('/categoryLeft', id)
export const reqindexCateModulenavitem = (id) => ajax.post(`/indexCateModule/navitem`, { id })
export const reqindexCateModulenavList = () => ajax.get('/indexCateModule/navList')
export const reqRegister = (user) => ajax.post('/register', user)
export const reqLogin = (user) => ajax.post('/login', user)
export const reqWorthBuying = () => ajax.get('/worthBuying')

