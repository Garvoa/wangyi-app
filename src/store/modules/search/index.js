import { reqSearchCentent, reqSearchkeyword } from "../../../api"
const state = {
  centenInit: {},
  searchKeyword: []

}
const mutations = {
  UPDATE_CENTENT_INIT(state, data) {
    state.centenInit = data
  },
  DELETE_CENTENT(state) {
    state.centenInit = {}
  },
  UPDATE_SEARCHKEYWORD(state, data) {
    state.searchKeyword = data
  },
  DELETE_SEARCHKEYWORD(state) {
    state.searchKeyword = []
  }

}
const actions = {
  async getSearchCentent({ commit }, user) {
    const result = await reqSearchCentent(user)
    const { code, data } = result.data
    if (code * 1 === 200) {
      commit('UPDATE_CENTENT_INIT', data)
    }
  },
  // eslint-disable-next-line no-unused-vars
  async getSearchkeyword({ commit }, value) {
    const result = await reqSearchkeyword(value)
    const { data, code } = result.data
    if (code * 1 === 200) {
      commit('UPDATE_SEARCHKEYWORD', data)
    }
  }
}
const getters = {
  hotKeywordVOList(state) {
    // console.log(state.centenInit)
    return state.centenInit ? state.centenInit.hotKeywordVOList : []
  }
}
export default {
  state, mutations, actions, getters
}