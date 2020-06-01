import { reqRegister, reqLogin } from "../../../api"
const state = {
  token: window.localStorage.getItem('token') || ''

}
const mutations = {
  USER_INFO(state, user) {
    state.token = user.token
  },
  DELELT_USER_INFO(state) {
    state.token = ''
  }
}
const actions = {
  // eslint-disable-next-line no-unused-vars
  async reqRegisterUser({ commit }, user) {
    return reqRegister(user)
  },
  // eslint-disable-next-line no-unused-vars
  reqLoginUser({ commit }, user) {
    return reqLogin(user)
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}