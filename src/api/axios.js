import axios from "axios"

const ajax = axios.create({
  baseURL: '/api',
  timeout: 20000
})
ajax.interceptors.request.use(config => {

  return config

})
ajax.interceptors.response.use((res) => {
  return res
}, (err) => {
  console.log(err)
  return new Promise(() => { })
})
export default ajax