import ajax from "./axios"
//主页数据
export const reqHome = () => ajax.get('/home')
// 商品列表右侧
export const reqcategoryRight = () => ajax.get('/categoryRight')
// 商品列表左侧
export const reqcategoryLeft = (id) => ajax.get('/categoryLeft', id)
