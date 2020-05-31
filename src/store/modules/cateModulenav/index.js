import { reqindexCateModulenavitem, reqindexCateModulenavList } from "../../../api"
const state = {
  CateModulenavitemData: [],
  CateModulenavListData: []
}
const mutations = {
  UPDATA_CateModulenavitemData(state, data) {

    state.CateModulenavitemData = data
    if (!window.sessionStorage.getItem(`${data.id}`)) {
      window.sessionStorage.setItem(`${data.id}`, JSON.stringify(data))
    }

  },

  UPDATA_indexCateModulenavList(state, CateModulenavListData) {
    CateModulenavListData.unshift({ name: '推荐' })
    CateModulenavListData.push({ name: '' })
    state.CateModulenavListData = CateModulenavListData

  },
  DELETE_CateModulenavitemData(state) {
    state.CateModulenavitemData = []
  }

}
const actions = {
  async reqindexCateModulenavitemData({ commit }, text) {


    const result = await reqindexCateModulenavitem(text)
    const { data, code } = result.data

    if (code === 200) {

      commit('UPDATA_CateModulenavitemData', data)
    } else {
      commit('UPDTATE_STATUS', code)
    }

  },
  async reqindexCateModulenavListData({ commit }, text) {

    const result = await reqindexCateModulenavList(text)
    const { data, code } = result.data

    if (code === 200) {
      commit('UPDATA_indexCateModulenavList', data)
    }
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}