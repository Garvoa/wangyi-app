import axios from "axios"
const ajax = axios.create({
  timeout: 20000
})
ajax.interceptors.request.use(config => {
  let token = window.localStorage.getItem('token')
  if (token) {
    config.headers['authorization'] = token
  }

  return config

})
ajax.interceptors.response.use((res) => {
  return res
}, (err) => {
  const { message } = err
  if (message.indexOf('Network Error') !== -1) {

    return { data: { code: 404, msg: '网络错误', data: {} } }
  }


})
export default ajax