import { reqindexCateModulenavitem, reqindexCateModulenavList } from "../../../api"
const state = {
  CateModulenavitemData: [],
  CateModulenavListData: []
}
const mutations = {
  UPDATA_CateModulenavitemData(state, data) {

    return state.CateModulenavitemData = data
  },
  UPDATA_indexCateModulenavList(state, CateModulenavListData) {
    CateModulenavListData.unshift({ name: '推荐' })
    CateModulenavListData.push({ name: '' })
    state.CateModulenavListData = CateModulenavListData

  },

}
const actions = {
  async reqindexCateModulenavitemData({ commit }, text) {

    const result = await reqindexCateModulenavitem(text)
    const { data, code } = result.data
    if (code === 200) {
      console.log(result)
      commit('UPDATA_CateModulenavitemData', data)
    }
  },
  async reqindexCateModulenavListData({ commit }, text) {

    const result = await reqindexCateModulenavList(text)
    const { data, code } = result.data

    if (code === 200) {
      // console.log(result)

      commit('UPDATA_indexCateModulenavList', data)
    }
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}