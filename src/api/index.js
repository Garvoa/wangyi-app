import ajax from "./axios"
// import axios from "axios"
//主页数据
export const reqHome = () => ajax.get('/api/home')
// 商品列表右侧
export const reqcategoryRight = (id) => ajax.get(`/api/categoryRight/${id}`)
// 商品列表左侧
export const reqcategoryLeft = (id) => ajax.get('/api/categoryLeft', id)
export const reqindexCateModulenavitem = (id) => ajax.post(`/api/indexCateModule/navitem`, { id })
export const reqindexCateModulenavList = () => ajax.get('/api/indexCateModule/navList')
export const reqRegister = (user) => ajax.post('/api/register', user)
export const reqLogin = (user) => ajax.post('/api/login', user)
export const reqWorthBuying = () => ajax.get('/api/worthBuying')
export const reqSearchCentent = () => ajax.get('/xhr/search/init.json')
export const reqSearchkeyword = (keywordPrefix) => ajax.post(`/xhr/search/searchAutoComplete.json?keywordPrefix=${keywordPrefix}`)



