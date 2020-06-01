import { reqcategoryRight } from "../../../api"
const state = {
  categoryRightData: []
}
const mutations = {
  UPDATA_categoryRightData(state, categoryRightData) {

    state.categoryRightData = categoryRightData
  }
}
const actions = {
  async reqcategoryRightData({ commit }, id) {

    const result = await reqcategoryRight(id)
    const { data, code } = result.data
    if (code === 200) {
      // console.log(result)
      commit('UPDATA_categoryRightData', data)
    }
  }
}
const getters = {
  categoryList(state) {
    console.log(state)
    return state.categoryRightData ? state.categoryRightData.categoryList : []
  },
  subCateList(state) {
    return state.categoryRightData ? state.categoryRightData.subCateList : []
  }
}
export default {
  state, mutations, actions, getters
}